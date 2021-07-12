import { useState, useRef } from 'react'
import { useCallbackRef } from './packages/hook/useCallbackRef'
import './app.scss'
import { ReactVisualEditor } from './packages/ReactVisualEditor'

export default () => {

    // const [pos, setPos] = useState({
    //     left: 0,
    //     top: 0,
    // })

    // const posRef = useRef(pos);
    // posRef.current = pos;

    // const moveDraggier = (() => {

    //     // 拖拽开始时div和鼠标的坐标值
    //     const dragData = useRef({
    //         startTop: 0,
    //         startLeft: 0, // 拖拽开始的时候，div的left值
    //         startX: 0,  // 拖拽开始的时候，鼠标的left值
    //         startY: 0,
    //     })

    //     const mousedown = useCallbackRef((e: React.MouseEvent<HTMLDivElement>) => {
    //         document.addEventListener('mousemove', mousemove);
    //         document.addEventListener('mouseup', mouseup);

    //         // 按下鼠标时记录 div和鼠标坐标的值
    //         dragData.current = {
    //             startTop: pos.top,
    //             startLeft: pos.left,
    //             startX: e.clientX,
    //             startY: e.clientY,
    //         }
    //     })

    //     const mousemove = useCallbackRef((e: MouseEvent) => {
    //         const {startX, startY, startLeft, startTop} = dragData.current;
    //         const durX = e.clientX - startX;
    //         const durY = e.clientY - startY;

    //         // 鼠标移动到对应位置时，设置div的坐标
    //         // div的偏移量 = 鼠标的偏移量 + div的偏移量
    //         setPos({
    //             top: durY + startTop, 
    //             left: durX + startLeft,
    //         })

    //         console.log({
    //             pos: `${pos.top}_${pos.left}`,
    //             ref: `${posRef.current.top}_${posRef.current.left}` ,
    //         });
    //     })

    //     const mouseup = useCallbackRef((e: MouseEvent) => {
    //         document.removeEventListener('mousemove', mousemove);
    //         document.removeEventListener('mouseup', mouseup);
    //     })

    //     return {
    //         mousedown
    //     }
    // })();

    return (
        <div className="app-home">
            {/* <div style={{
                height: '50px',
                width: '50px',
                backgroundColor: 'black',
                position: 'relative',
                top: `${pos.top}px`,
                left: `${pos.left}px`,
                display: 'inline-block'
            }} 
            onMouseDown={moveDraggier.mousedown}
            /> */}
            <ReactVisualEditor />
        </div>
    )
}