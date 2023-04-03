export const Mixin = function (superClass) {
  return class extends superClass {
    _fireEvent(eventName, detail = {}) {
      this.dispatchEvent(
        new CustomEvent(eventName, {
          bubbles: true,
          composed: true,
          detail: detail,
        })
      );
    }
  };
};
