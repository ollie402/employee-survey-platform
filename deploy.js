// deploy.js - Debug Version with Visible Output
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

// Get environment from command line (test or live)
const environment = process.argv[2] || 'test';

console.log(`🚀 Starting deployment to ${environment} environment...`);

// Check if config.js exists
let config;
try {
    config = require('./config');
} catch (e) {
    // Config doesn't exist yet, use defaults
    config = {
        environment: environment,
        get: (key, defaultValue) => process.env[key] || defaultValue
    };
}

// Deployment configuration for Vercel
const deployConfig = {
    test: {
        command: 'vercel --yes',
        buildEnv: 'test',
        envFile: 'environments/.env.test'
    },
    live: {
        command: 'vercel --yes --prod',
        buildEnv: 'production',
        envFile: 'environments/.env.production',
        requireConfirmation: true
    },
    production: {
        command: 'vercel --yes --prod',
        buildEnv: 'production',
        envFile: 'environments/.env.production',
        requireConfirmation: true
    }
};

const deployment = deployConfig[environment] || deployConfig.test;

async function deploy() {
    // Safety check for production
    if (deployment.requireConfirmation) {
        console.log('⚠️  WARNING: Deploying to PRODUCTION!');
        console.log('This will update your LIVE website.');
        
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        
        const answer = await new Promise(resolve => {
            readline.question('Type "deploy" to continue: ', resolve);
        });
        readline.close();
        
        if (answer !== 'deploy') {
            console.log('❌ Deployment cancelled');
            process.exit(0);
        }
    }

    // Set environment
    process.env.NODE_ENV = deployment.buildEnv;

    // Build first (if build-script.js exists)
    if (fs.existsSync('build-script.js')) {
        console.log('📦 Building project...');
        const buildProcess = exec('node build-script.js');
        
        buildProcess.stdout.on('data', (data) => {
            console.log(data.toString());
        });
        
        buildProcess.stderr.on('data', (data) => {
            console.error('Build error:', data.toString());
        });
        
        await new Promise((resolve, reject) => {
            buildProcess.on('close', (code) => {
                if (code === 0) {
                    console.log('✅ Build successful!');
                    resolve();
                } else {
                    console.error('❌ Build failed with code:', code);
                    reject(new Error('Build failed'));
                }
            });
        });
    }
    
    // Create .vercel directory if it doesn't exist
    if (!fs.existsSync('.vercel')) {
        fs.mkdirSync('.vercel');
    }
    
    // Copy environment variables for Vercel if env file exists
    if (fs.existsSync(deployment.envFile)) {
        const envContent = fs.readFileSync(deployment.envFile, 'utf-8');
        const vercelEnvPath = '.vercel/.env.' + deployment.buildEnv + '.local';
        fs.writeFileSync(vercelEnvPath, envContent);
        console.log(`📋 Environment variables loaded from ${deployment.envFile}`);
    }
    
    console.log(`📤 Deploying to Vercel (${environment})...`);
    console.log(`⚙️  Running: ${deployment.command}`);
    
    // Deploy to Vercel with visible output
    const vercelProcess = exec(deployment.command);
    
    // Show output as it happens
    vercelProcess.stdout.on('data', (data) => {
        console.log(data.toString());
    });
    
    vercelProcess.stderr.on('data', (data) => {
        console.error('Vercel error:', data.toString());
    });
    
    vercelProcess.on('close', (code) => {
        if (code === 0) {
            console.log('\n✅ Deployment complete!');
            console.log('🌐 Check above for your deployment URL');
        } else {
            console.log('\n❌ Deployment failed with code:', code);
            
            // Common fixes
            if (code === 1) {
                console.log('\n💡 Possible solutions:');
                console.log('1. Run: vercel login');
                console.log('2. Run: vercel link');
                console.log('3. Check if Vercel CLI is installed: npm install -g vercel');
            }
        }
    });
}

// Run deployment
deploy().catch(error => {
    console.error('Deployment error:', error);
    process.exit(1);
});