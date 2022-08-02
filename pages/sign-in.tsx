import { Button, Input, Typography } from "@supabase/ui";
import { useRouter } from "next/router";
import { Layout } from "../components";

export default function SignInPage() {
  const router = useRouter();

  return (
    <Layout>
      <form
        method="POST"
        action="/api/sign-in"
        className="flex flex-col min-w-[300px]"
      >
        <Typography.Text className="mt-2">Email</Typography.Text>
        <Input id="email" type="email" name="email" required />
        <Typography.Text className="mt-2">Password</Typography.Text>
        <Input id="password" type="password" name="password" required />
        <Button block className="my-3">
          Sign in
        </Button>
      </form>
      <Typography.Text>
        {"Don't have an account? "}
        <Typography.Link onClick={() => router.push("/sign-up")}>
          Sign up
        </Typography.Link>
      </Typography.Text>
    </Layout>
  );
}
