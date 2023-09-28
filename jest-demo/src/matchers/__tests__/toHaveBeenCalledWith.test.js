const fruits = require('../toHaveBeenCalledWith');


test('registration applies correctly to orange La Croix', () => {
    const f = jest.fn((f) => console.log(f));

    for(const z of fruits) {
        f(z);
    }
    expect(f).toHaveBeenCalledWith('apple'); // 期望 f 函数有被 'apple' 的传参调用过
    expect(f).toBeCalledWith('apple'); // 期望 f 函数有被 'apple' 的传参调用过
  });