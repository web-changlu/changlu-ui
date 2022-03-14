/**
 * 将目标元素移动至指定容器的指定份数位置
 * @param container 容器
 * @param targetElement 目标元素
 * @param count 容器平分的份数
 * @param index 目标元素要前往的份数
 */
export function setClickState(container: HTMLElement, targetElement: HTMLElement, count: number = 0, index: number) {
    let unitWidth: number = 0;
    unitWidth = (container.offsetWidth) / (2 * count);
    const displacement = unitWidth * ((2 * index) + 1) - 25 - 6;
    targetElement.style.left = displacement + 'px';
}