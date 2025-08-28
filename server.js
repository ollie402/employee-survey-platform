// Local development server with API support for email functionality
import express from 'express';
import path from 'path';
import fs from 'fs';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.static('.'));

// Import and setup API routes
const setupAPIRoutes = async () => {
  const apiDir = path.join(__dirname, 'api');
  
  if (fs.existsSync(apiDir)) {
    const apiFiles = fs.readdirSync(apiDir).filter(file => file.endsWith('.js'));
    
    for (const file of apiFiles) {
      const routePath = `/api/${file.replace('.js', '')}`;
      
      try {
        // Import the handler (use dynamic import for ES modules)
        const handlerModule = await import(`./api/${file}`);
        const handler = handlerModule.default;
        
        if (!handler) {
          console.error(`❌ No default export found in ${file}`);
          continue;
        }
        
        // Setup the route
        app.all(routePath, async (req, res) => {
          try {
            await handler(req, res);
          } catch (error) {
            console.error(`Error in ${routePath}:`, error);
            res.status(500).json({ error: 'Internal server error' });
          }
        });
        
        console.log(`✅ API route registered: ${routePath}`);
      } catch (error) {
        console.error(`❌ Failed to load ${file}:`, error.message);
      }
    }
  }
};

// Initialize server
const startServer = async () => {
  await setupAPIRoutes();
  
  // Serve index.html for the root route
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });
  
  // Health check endpoint
  app.get('/health', (req, res) => {
    res.json({
      status: 'healthy',
      environment: 'development',
      timestamp: new Date().toISOString(),
      emailConfigured: !!(process.env.SMTP2GO_API_KEY && process.env.SMTP2GO_SENDER_EMAIL)
    });
  });
  
  const server = app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
    console.log(`📧 Email API endpoints available:`);
    console.log(`   • http://localhost:${PORT}/api/test-email-config`);
    console.log(`   • http://localhost:${PORT}/api/send-email`);
    console.log(`   • http://localhost:${PORT}/api/send-invitation`);
    console.log(`   • http://localhost:${PORT}/api/send-chat-invite`);
    console.log(`   • http://localhost:${PORT}/api/send-reset-password`);
    console.log('\n💡 Tip: Visit /api/test-email-config to check your SMTP2GO setup');
  });

  // Handle graceful shutdown
  process.on('SIGTERM', () => {
    console.log('Received SIGTERM, shutting down gracefully...');
    server.close(() => {
      console.log('Server closed');
      process.exit(0);
    });
  });

  process.on('SIGINT', () => {
    console.log('\nReceived SIGINT, shutting down gracefully...');
    server.close(() => {
      console.log('Server closed');
      process.exit(0);
    });
  });
};

startServer().catch(console.error);