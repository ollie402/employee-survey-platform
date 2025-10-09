// Analytics Dashboard JavaScript
console.log('🚀 Analytics Dashboard loaded');

// Initialize the dashboard when the page loads
document.addEventListener('DOMContentLoaded', function() {
    initializeAnalyticsDashboard();
});

function initializeAnalyticsDashboard() {
    console.log('📊 Initializing Analytics Dashboard');

    // Check if we're on the analytics section
    const analyticsSection = document.getElementById('chat-feedback-section');
    if (!analyticsSection) {
        console.log('⚠️ Analytics section not found');
        return;
    }

    // Add the advanced analytics interface
    addAdvancedAnalyticsUI();

    // Load sample data
    loadAnalyticsData();
}

function addAdvancedAnalyticsUI() {
    const analyticsSection = document.getElementById('chat-feedback-section');
    if (!analyticsSection) return;

    // Create the advanced analytics dashboard HTML
    const advancedDashboard = `
        <div class="advanced-analytics-dashboard">
            <!-- Top Controls -->
            <div class="analytics-controls" style="background: #2c3e50; padding: 1.5rem; border-radius: 8px; margin-bottom: 2rem; display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
                <select id="chat-select" class="form-select" style="min-width: 200px; background: #34495e; color: white; border: 1px solid #4a5f7f;">
                    <option value="">Select Chat...</option>
                    <option value="general">General Feedback</option>
                    <option value="customer">Customer Satisfaction</option>
                    <option value="employee">Employee Survey</option>
                </select>

                <button class="btn btn-primary" onclick="importAnalyticsData()" style="background: #3498db; border: none;">
                    📤 Import Data
                </button>

                <div style="display: flex; align-items: center; gap: 0.5rem;">
                    <label style="color: white; margin: 0;">Date Range:</label>
                    <input type="date" id="date-from" class="form-input" value="2025-01-01" style="background: #34495e; color: white; border: 1px solid #4a5f7f;">
                    <span style="color: white;">to</span>
                    <input type="date" id="date-to" class="form-input" value="2025-09-30" style="background: #34495e; color: white; border: 1px solid #4a5f7f;">
                </div>

                <button class="btn btn-primary" onclick="applyDateFilter()" style="background: #2980b9;">
                    Apply
                </button>

                <button class="btn btn-secondary" onclick="downloadAnalysis()" style="margin-left: auto; background: #34495e;">
                    Download Analysis
                </button>
            </div>

            <!-- Main Dashboard Area -->
            <div style="display: grid; grid-template-columns: 250px 1fr; gap: 2rem;">
                <!-- Left Sidebar - Filters -->
                <div class="analysis-filters" style="background: #2c3e50; padding: 1.5rem; border-radius: 8px; color: white;">
                    <h3 style="margin-top: 0; color: white;">Analysis Filters</h3>

                    <div style="margin-bottom: 1.5rem;">
                        <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Score Range</label>
                        <select class="form-select" style="width: 100%; background: #34495e; color: white; border: 1px solid #4a5f7f;">
                            <option>All Scores</option>
                            <option>1-2 (Low)</option>
                            <option>3 (Medium)</option>
                            <option>4-5 (High)</option>
                        </select>
                    </div>

                    <div class="quick-stats" style="background: #34495e; padding: 1rem; border-radius: 6px;">
                        <h4 style="margin-top: 0; font-size: 0.875rem; color: white;">Quick Stats</h4>
                        <div style="font-size: 0.875rem;">
                            <div style="margin-bottom: 0.5rem;"><strong>Responses:</strong> <span id="stat-responses">450</span></div>
                            <div style="margin-bottom: 0.5rem;"><strong>Avg Score:</strong> <span id="stat-avg-score">4.16/5.0</span></div>
                            <div style="margin-bottom: 0.5rem;"><strong>Positive:</strong> <span id="stat-positive">76.6%</span></div>
                            <div><strong>Negative:</strong> <span id="stat-negative">8.0%</span></div>
                        </div>
                    </div>
                </div>

                <!-- Right Content Area -->
                <div>
                    <!-- AI-Driven Analysis Header -->
                    <div style="background: white; padding: 2rem; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); margin-bottom: 2rem;">
                        <h2 style="margin: 0 0 0.5rem 0; color: #2c3e50;">AI-Driven Analysis Dashboard</h2>
                        <p style="color: #7f8c8d; margin: 0;">Analysis based on AI processing of Customer Satisfaction Q3 2025</p>

                        <!-- AI Insights Box -->
                        <div style="background: #d5f4e6; border-left: 4px solid #27ae60; padding: 1rem; border-radius: 6px; margin-top: 1.5rem;">
                            <div style="display: flex; align-items: start; gap: 0.75rem;">
                                <span style="font-size: 1.5rem;">🤖</span>
                                <div>
                                    <h4 style="margin: 0 0 0.5rem 0; color: #27ae60;">AI Insights:</h4>
                                    <p style="margin: 0; color: #2c3e50;">AI Analysis: Customer satisfaction is strong overall with product quality leading at 4.5/5. Delivery speed needs improvement.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Score Overview by Category -->
                    <div style="background: white; padding: 2rem; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); margin-bottom: 2rem;">
                        <h3 style="margin-top: 0;">Score Overview by Category</h3>
                        <canvas id="category-chart" width="800" height="300"></canvas>
                    </div>

                    <!-- Bottom Charts Row -->
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
                        <!-- Sentiment Distribution -->
                        <div style="background: white; padding: 2rem; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                            <h3 style="margin-top: 0;">Sentiment Distribution</h3>
                            <canvas id="sentiment-chart" width="300" height="300"></canvas>
                        </div>

                        <!-- Response Breakdown -->
                        <div style="background: white; padding: 2rem; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                            <h3 style="margin-top: 0;">Response Breakdown</h3>
                            <canvas id="response-chart" width="300" height="300"></canvas>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Find the card inside analytics section and replace its content
    const cardContent = analyticsSection.querySelector('.card');
    if (cardContent) {
        cardContent.innerHTML = `
            <div class="card-header">
                <h2 class="card-title">Analytics</h2>
            </div>
            ${advancedDashboard}
        `;
    }
}

function loadAnalyticsData() {
    // Load Chart.js if not already loaded
    if (typeof Chart === 'undefined') {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
        script.onload = function() {
            renderCharts();
        };
        document.head.appendChild(script);
    } else {
        renderCharts();
    }
}

function renderCharts() {
    // Category Bar Chart
    const categoryCtx = document.getElementById('category-chart');
    if (categoryCtx) {
        new Chart(categoryCtx, {
            type: 'bar',
            data: {
                labels: ['Product Quality', 'Customer Service', 'Delivery Speed', 'Value for Money', 'Website Experience'],
                datasets: [{
                    label: 'Average Score',
                    data: [4.5, 4.2, 3.8, 4.1, 4.3],
                    backgroundColor: '#3498db',
                    borderRadius: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 5.0
                    }
                }
            }
        });
    }

    // Sentiment Pie Chart
    const sentimentCtx = document.getElementById('sentiment-chart');
    if (sentimentCtx) {
        new Chart(sentimentCtx, {
            type: 'pie',
            data: {
                labels: ['Positive', 'Neutral', 'Negative'],
                datasets: [{
                    data: [68, 24, 8],
                    backgroundColor: ['#27ae60', '#f39c12', '#e74c3c']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });
    }

    // Response Breakdown Stacked Bar Chart
    const responseCtx = document.getElementById('response-chart');
    if (responseCtx) {
        new Chart(responseCtx, {
            type: 'bar',
            data: {
                labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                datasets: [
                    {
                        label: 'Positive %',
                        data: [70, 68, 72, 65],
                        backgroundColor: '#27ae60'
                    },
                    {
                        label: 'Neutral %',
                        data: [22, 24, 20, 28],
                        backgroundColor: '#f39c12'
                    },
                    {
                        label: 'Negative %',
                        data: [8, 8, 8, 7],
                        backgroundColor: '#e74c3c'
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        stacked: true
                    },
                    y: {
                        stacked: true,
                        max: 100
                    }
                }
            }
        });
    }
}

// Helper functions for buttons
function importAnalyticsData() {
    alert('Import Data functionality - Upload CSV/Excel with analytics data');
}

function applyDateFilter() {
    const dateFrom = document.getElementById('date-from').value;
    const dateTo = document.getElementById('date-to').value;
    console.log('Applying date filter:', dateFrom, 'to', dateTo);
    showToast('Date filter applied!', 'success');
}

function downloadAnalysis() {
    alert('Downloading analysis report...');
}

// Export the function for use in index.html
window.initAnalyticsDashboard = initializeAnalyticsDashboard;

// Make sure this loads when switching to Analytics
if (window.showSection) {
    const originalShowSection = window.showSection;
    window.showSection = function(sectionName) {
        originalShowSection(sectionName);
        if (sectionName === 'chat-feedback') {
            setTimeout(() => {
                initializeAnalyticsDashboard();
            }, 100);
        }
    };
}

console.log('✅ Analytics Dashboard module loaded');
