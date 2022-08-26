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
    id: '1',
    type: 'input',
    data: { label: 'Input Node' },
    position: { x: 250, y: 25 },
  },

  {
    id: '2',
    // you can also pass a React component as a label
    data: { label: <div>Default Node</div> },
    position: { x: 100, y: 125 },
  },
  {
    id: '3',
    type: 'output',
    data: { label: 'Output Node' },
    position: { x: 250, y: 250 },
  },
];

const edges: Edge[] = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e2-3', source: '2', target: '3', animated: true },
];

const fitViewOptions: FitViewOptions = {
  padding: 0.5,
};

export function Drawing(props: DrawingProps) {
  return (
    <ReactFlow
      className={styles._}
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
