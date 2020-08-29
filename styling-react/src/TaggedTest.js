function tagged(...args) {
  console.log(args);
}
tagged`hello ${{ foo: "bar" }} ${() => "word"}`;
