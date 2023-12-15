export const append = (element: HTMLElement, children) => element.append(children);
export const appendMany = (element: HTMLElement, children: []) => element.append(...children);