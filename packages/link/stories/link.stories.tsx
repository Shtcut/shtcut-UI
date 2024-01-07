import { Link } from '../src';

export default {
  title: 'Link',
  component: Link,
  parameters: {
    controls: { hideNoControlWarning: true },
  },
};

export const basic = () => {
  <div className="flex flex-col space-y-2">
    <Link href="#">Click me here</Link>
    <p>
      Lorem ipsum dolor, <Link href="#">sit amet </Link>consectetur adipisicing elit. Quae autem eos recusandae
      voluptates dignissimos voluptate sunt deleniti perferendis odit modi error veritatis ipsa repellat sint nobis,
      cumque tempora ducimus harum.
    </p>
    <Link disabled>Click me here</Link>
  </div>;
};
