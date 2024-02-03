import React from 'react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import LogInForm from '@/components/forms/login-form';

const page = () => {
  return (
    <div>
      <Card className='w-[350px]'>
        <CardHeader>
          <CardTitle>Log In</CardTitle>
          <CardDescription>Log in to your account</CardDescription>
        </CardHeader>
        <CardContent>
          <LogInForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default page;