import Link from 'next/link';
import { FC } from 'react';

const SignUpBanner: FC = () => {
  return (
<div className="bg-black text-white text-center py-4 px-6">
  <p className="text-lg">
    Sign up and get <span className="font-bold">20% off</span> your first order.{" "}
    <Link
      href="/sign-up"
      className="underline font-semibold hover:text-yellow-300"
    >
      Sign Up Now
    </Link>
  </p>
</div>
  );
};

export default SignUpBanner;
