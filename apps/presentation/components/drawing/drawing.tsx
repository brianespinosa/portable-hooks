import ReactFlow, {
  Node,
  Edge,
  FitViewOptions,
} from 'react-flow-renderer/nocss';
import 'react-flow-renderer/dist/style.css';
// import 'react-flow-renderer/dist/theme-default.css';
import styles from './drawing.module.scss';

/* eslint-disable-next-line */
export interface DrawingProps {}

const nodes: Node[] = [
  {
    id: 'A',
    type: 'input',
    data: { label: 'Class Component' },
    position: { x: 0, y: 0 },
    selectable: false,
    style: {
      width: 170,
      height: 292,
    },
  },
  {
    id: '1',
    data: { label: 'State' },
    position: { x: 10, y: 40 },
    parentNode: 'A',
    extent: 'parent',
    selectable: false,
  },
  {
    id: '2',
    data: { label: 'Methods' },
    position: { x: 10, y: 90 },
    parentNode: 'A',
    extent: 'parent',
    selectable: false,
    style: {
      height: 142,
    },
  },
  {
    id: 'a',
    data: { label: 'Handlers' },
    position: { x: 10, y: 40 },
    parentNode: '2',
    extent: 'parent',
    selectable: false,
    style: {
      width: 130,
    },
  },
  {
    id: 'b',
    data: { label: 'Setters' },
    position: { x: 10, y: 90 },
    parentNode: '2',
    extent: 'parent',
    selectable: false,
    style: {
      width: 130,
    },
  },
  {
    id: '4',
    data: { label: 'Render' },
    position: { x: 10, y: 240 },
    parentNode: 'A',
    extent: 'parent',
    selectable: false,
  },
];

const edges: Edge[] = [
  // { id: 'e1-2', source: '2', target: '3' },
  // { id: 'e2-3', source: '2', target: '3', animated: true },
];

const fitViewOptions: FitViewOptions = {
  padding: 0.3,
};

export function Drawing(props: DrawingProps) {
  return (
    <ReactFlow
      className={styles['_']}
      edges={edges}
      fitView
      fitViewOptions={fitViewOptions}
      nodes={nodes}
      panOnDrag={false}
      panOnScroll={false}
      preventScrolling
      proOptions={{
        account: 'paid-pro',
        hideAttribution: true,
      }}
      zoomOnDoubleClick={false}
      zoomOnPinch={false}
      zoomOnScroll={false}
    />
  );
}

export default Drawing;
