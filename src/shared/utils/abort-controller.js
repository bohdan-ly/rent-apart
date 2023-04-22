class AbortFactory {
  controllers = {};
  instance = null;
  static instance;

  constructor() {
    if (this) return AbortFactory.instance;
    AbortFactory.instance = this;
    return this;
  }

  getControllers = () => {
    return this.controllers;
  };
  genController = (name) => {
    if (!this.controllers) {
      this.controllers = {};
    }
    this.controllers[name] = new AbortController();
    return this.controllers[name];
  };
  abort = (name) => {
    if (this.controllers[name]) {
      this.controllers[name].abort();
      this.clearController(name);
    }
  };
  clearController = (name) => {
    if (this.controllers[name]) {
      delete this.controllers[name];
    }
  };
  abortAll = (excludeList = []) => {
    const allControllers = this.controllers || {};
    Object.keys(allControllers).forEach((i) => {
      if (excludeList.includes(i)) return;
      this.controllers[i].abort();
      this.clearController(i);
    });
  };
  clearAllControllers = () => {
    this.controllers = {};
  };
}

const ApiAbortController = new AbortFactory();

Object.freeze(ApiAbortController);

export { ApiAbortController };
