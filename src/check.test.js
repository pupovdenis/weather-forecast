describe('Environment check', () => {
  test('Jest should be defined', () => {
    expect(jest).toBeDefined();
  });

  test('expect should be available', () => {
    expect(expect).toBeDefined();
  });
});
