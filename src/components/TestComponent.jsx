// import React from 'react';

// const TestComponent = () => {
//   return (
//     <div className="p-4 bg-primary text-primary-foreground rounded-lg">
//       <h1 className="text-2xl font-bold">Test Component</h1>
//       <p>If you can see this styled properly, the setup is working!</p>
//     </div>
//   );
// };

// export default TestComponent;

import React from 'react';
// import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
//import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Card,CardHeader,CardContent,CardTitle } from './ui/card';




const TestComponent = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-primary">
            Test Component
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-gray-600">
            If you can see this styled properly, the setup is working!
          </p>
          <div className="mt-4 p-4 bg-blue-100 rounded-lg">
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="w-4 h-4 bg-green-500 rounded-full mr-2"></span>
                Tailwind CSS is working
              </li>
              <li className="flex items-center">
                <span className="w-4 h-4 bg-green-500 rounded-full mr-2"></span>
                shadcn/ui components are working
              </li>
              <li className="flex items-center">
                <span className="w-4 h-4 bg-green-500 rounded-full mr-2"></span>
                React is working
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TestComponent;