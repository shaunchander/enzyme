export const portal = (node: HTMLElement) => {
	document.querySelector('body')?.appendChild(node).focus();
};
