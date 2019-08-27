import Link from "next/link";
import { HeadingOne } from "umqombothi-component-library";
export default () => (
  <div>
    Hello World.{" "}
    <Link href="/about">
      <a>About</a>
    </Link>
    <HeadingOne className="bg-pinkDarkest" text="hello" />
  </div>
);
