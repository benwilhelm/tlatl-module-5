export class FooBar {
  constructor(props) {
    // verify that all required values are present
    const required = ['foo', 'bar'];
    const missing = [];
    required.forEach((propName) => {
      if (!props.hasOwnProperty(propName)) {
        missing.push(propName);
      }
    });
    if (missing.length) {
      throw new Error(`Missing properties: ${missing.join(', ')}`);
    }

    // set properties on instance from allowed list
    const allowed = ['foo', 'bar', 'bif', 'baz', 'separator'];
    allowed.forEach((propName) => {
      if (props.hasOwnProperty(propName)) {
        this[propName] = props[propName];
      }
    });

    this.separator = this.separator || '';
  }

  get foobar() {
    return [this.foo, this.bar].join(this.separator);
  }
}
