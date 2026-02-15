import Header from './components/Header';
import Footer from './components/Footer';
import CodeBlock from './components/CodeBlock';

function App() {
  const exampleCode = `// Example: Secure Meeting Integration
import { SecureMeet } from '@securemeet/sdk';

const meeting = new SecureMeet({
  apiKey: 'your-api-key',
  encryption: 'end-to-end'
});

async function joinMeeting() {
  try {
    const session = await meeting.join({
      roomId: 'abc-123',
      userName: 'John Doe'
    });
    
    console.log('Connected to meeting:', session.id);
  } catch (error) {
    console.error('Failed to join:', error);
  }
}`;

  const pythonExample = `# Python SDK Example
from securemeet import Client

client = Client(api_key="your-api-key")

# Create a new meeting
meeting = client.create_meeting(
    title="Team Standup",
    duration=30,
    encryption=True
)

print(f"Meeting URL: {meeting.url}")
print(f"Meeting ID: {meeting.id}")`;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Secure Video Meetings
                <span className="block text-blue-600 mt-2">Made Simple</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                End-to-end encrypted video conferencing platform built for privacy-conscious teams.
                Easy to integrate, secure by default.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg">
                  Get Started Free
                </button>
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors shadow-lg border-2 border-blue-600">
                  View Documentation
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
              Why Choose SecureMeet?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 border rounded-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">End-to-End Encryption</h3>
                <p className="text-gray-600">
                  Your meetings are secured with military-grade encryption. Nobody can access your conversations.
                </p>
              </div>

              <div className="p-6 border rounded-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 7H7v6h6V7z" />
                    <path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Easy Integration</h3>
                <p className="text-gray-600">
                  Simple SDK and API for quick integration into your existing applications.
                </p>
              </div>

              <div className="p-6 border rounded-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Scalable Infrastructure</h3>
                <p className="text-gray-600">
                  From 2 to 2000 participants, our infrastructure scales with your needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Code Examples Section */}
        <section id="docs" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
              Quick Start Guide
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Get started in minutes with our simple SDK. Here are some quick examples to help you integrate SecureMeet.
            </p>

            <div className="max-w-4xl mx-auto space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">JavaScript/TypeScript</h3>
                <CodeBlock code={exampleCode} language="javascript" />
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Python</h3>
                <CodeBlock code={pythonExample} language="python" />
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                <h4 className="font-semibold text-blue-900 mb-2">💡 Pro Tip</h4>
                <p className="text-blue-800">
                  Check out our comprehensive documentation for more advanced features including screen sharing, 
                  recording, and custom layouts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Join thousands of developers building secure meeting experiences.
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
              Start Building Today
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
