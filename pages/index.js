import Link from "next/link";
import { HeadingOne } from "umqombothi-component-library";
export default () => (
  <div>
    Hello World.{" "}
    <Link href="/about">
      <a>About</a>
    </Link>
    <div className="flex flex-row">
      <p className="bg p-4">Hello</p>

      <p className="bg p-4">Hello</p>

      <p className="bg-blue-400 p-4">Hello</p>
    </div>
    <p className="bg-blue-400 p-4">Hello</p>
    <HeadingOne className="bg-pinkDarkest" text="hello" />
  </div>
);
