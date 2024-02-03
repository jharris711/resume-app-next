import React from 'react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import SignUpForm from '@/components/forms/signup-form';

const page = () => {
  return (
    <div>
      <Card className='w-[350px]'>
        <CardHeader>
          <CardTitle>Sign Up</CardTitle>
          <CardDescription>Sign up for an account</CardDescription>
        </CardHeader>
        <CardContent>
          <SignUpForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default page;