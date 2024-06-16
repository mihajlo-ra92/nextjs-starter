export { default } from "next-auth/middleware";

// export function middleware(request: NextRequest) {}
export const config = {
  matcher: ["/users/:id*"],
};
