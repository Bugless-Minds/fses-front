import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function UTMLoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const [showRoleSelection, setShowRoleSelection] = useState(false);
  const navigate = useNavigate();

  const roles = [
    { id: 'officeAssistant', name: 'Office Assistant', path: '/officeAssistant' },
    { id: 'supervisor', name: 'Research Supervisor', path: '/supervisor' },
    { id: 'programCoordinator', name: 'Program Coordinator', path: '/programCoordinator' },
    { id: 'pgam', name: 'PGAM (Postgraduate Academic & Student Affairs Manager)', path: '/pgam' }
  ];

  const handleLogin = () => {
    if (!username || !password) {
      alert('Please enter both username and password');
      return;
    }

    if (password.length < 8) {
      alert('Password must be at least 8 characters long');
      return;
    }

    // Simple authentication simulation
    // In a real application, this would be handled by a backend API
    setShowRoleSelection(true);
  };

  const handleRoleSelection = (role) => {
    setSelectedRole(role.id);
    // Navigate to the selected role's dashboard
    navigate(role.path);
  };

  const handleBackToLogin = () => {
    setShowRoleSelection(false);
    setUsername('');
    setPassword('');
    setSelectedRole('');
  };

  if (showRoleSelection) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header with Logo */}
          <div className="p-6 flex flex-col items-center">
            <div className="flex items-center">
              <div className="h-16 w-16 rounded-full bg-burgundy-700 flex items-center justify-center">
                <div className="text-yellow-400 text-2xl font-bold">FSES</div>
              </div>
              <div className="ml-4 text-4xl font-bold text-burgundy-700">
                UTM
              </div>
            </div>
            <div className="text-center mt-2">
              <h2 className="text-burgundy-700 text-lg font-bold">First Stage Evaluation System</h2>
              <p className="text-gray-600 text-sm mt-1">Select your role to continue</p>
            </div>
          </div>

          {/* Role Selection */}
          <div className="px-6 pb-6">
            <div className="space-y-3">
              {roles.map((role) => (
                <button
                  key={role.id}
                  onClick={() => handleRoleSelection(role)}
                  className="w-full p-4 text-left border border-gray-300 rounded-lg hover:border-burgundy-500 hover:bg-burgundy-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-burgundy-500"
                >
                  <div className="text-sm font-medium text-gray-900">{role.name}</div>
                  <div className="text-xs text-gray-500 mt-1">
                    {role.id === 'officeAssistant' && 'Manage student lists and system data'}
                    {role.id === 'supervisor' && 'Nominate examiners for your students'}
                    {role.id === 'programCoordinator' && 'Assign chairpersons and generate reports'}
                    {role.id === 'pgam' && 'Oversee the entire evaluation process'}
                  </div>
                </button>
              ))}
            </div>

            <button
              onClick={handleBackToLogin}
              className="w-full mt-4 py-2 px-4 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-burgundy-500"
            >
              Back to Login
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header with Logo */}
        <div className="p-6 flex flex-col items-center">
          <div className="flex items-center">
            <div className="h-16 w-16 rounded-full bg-burgundy-700 flex items-center justify-center">
              <div className="text-yellow-400 text-2xl font-bold">FSES</div>
            </div>
            <div className="ml-4 text-4xl font-bold text-burgundy-700">
              UTM
            </div>
          </div>
          <div className="text-center mt-2">
            <h2 className="text-burgundy-700 text-lg font-bold">First Stage Evaluation System</h2>
            <p className="text-gray-600 text-sm mt-1">Faculty of Artificial Intelligence</p>
          </div>
        </div>

        {/* Login Form */}
        <div className="px-6 pb-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                Staff ID 
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-burgundy-500 focus:border-transparent"
                placeholder="Enter your staff ID"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-burgundy-500 focus:border-transparent"
                placeholder="Enter your password"
                required
                minLength={8}
              />
            </div>

            <button
              onClick={handleLogin}
              className="w-full bg-burgundy-700 text-white py-2 px-4 rounded-md hover:bg-burgundy-800 focus:outline-none focus:ring-2 focus:ring-burgundy-500 focus:ring-offset-2 transition-colors duration-200"
            >
              Login
            </button>

            <div className="text-center">
              <a
                href="#"
                className="text-sm text-burgundy-600 hover:text-burgundy-800 underline"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Please contact system administrator for password reset');
                }}
              >
                Forgot Password?
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-6 py-3">
          <p className="text-xs text-gray-500 text-center">
            © 2025 Universiti Teknologi Malaysia. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

// Custom styles for UTM burgundy color
const style = document.createElement('style');
document.head.appendChild(style);
style.sheet.insertRule(`
  .text-burgundy-700 {
    color: #8E2246;
  }
`);
style.sheet.insertRule(`
  .bg-burgundy-700 {
    background-color: #8E2246;
  }
`);
style.sheet.insertRule(`
  .bg-burgundy-800 {
    background-color: #7D1D3F;
  }
`);
style.sheet.insertRule(`
  .hover\\:bg-burgundy-800:hover {
    background-color: #7D1D3F;
  }
`);
style.sheet.insertRule(`
  .text-burgundy-600 {
    color: #A52A5A;
  }
`);
style.sheet.insertRule(`
  .hover\\:text-burgundy-800:hover {
    color: #7D1D3F;
  }
`);
style.sheet.insertRule(`
  .border-burgundy-500 {
    border-color: #A52A5A;
  }
`);
style.sheet.insertRule(`
  .focus\\:ring-burgundy-500:focus {
    --tw-ring-color: rgba(165, 42, 90, 0.5);
  }
`);
style.sheet.insertRule(`
  .hover\\:border-burgundy-500:hover {
    border-color: #A52A5A;
  }
`);
style.sheet.insertRule(`
  .hover\\:bg-burgundy-50:hover {
    background-color: #fdf2f8;
  }
`);