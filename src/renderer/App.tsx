import React, { useEffect, useRef } from 'react';
import Menu from './components/Menu';
import Scene from './layout/Scen/Scen';
import ResourcePanel from './layout/ResourcePanel';
import TimePanel from './layout/TimePanel';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from './ui/resizable';
import { useAppSelector } from './hooks/redux';
import { getAtlasPngList } from './lib/utils';
import { Toaster } from './ui/sonner';
import { toast } from 'sonner';
import { isNull } from 'lodash';
import { ImperativePanelGroupHandle } from 'react-resizable-panels';
import * as ResizablePrimitive from "react-resizable-panels"
const App: React.FC = () => {
  const { isBlackUISkin } = useAppSelector(state => state.global);
  const { currentAnimation } = useAppSelector(state => state.canvas)
  useEffect(() => {
    const { classList } = document.body;
    isBlackUISkin ? classList.add('dark') : classList.remove('dark');
  }, [isBlackUISkin]);


  const canvasLeftSideRef = useRef<ImperativePanelGroupHandle>(null)

  useEffect(() => {
    if (canvasLeftSideRef.current) {
      const layout = isNull(currentAnimation) ? [100, 0] : [65, 35]
      canvasLeftSideRef.current.setLayout(layout)
    }
  }, [currentAnimation])

  useEffect(() => {
    const { ipc } = window.electronAPI
    ipc.answerMain('get-atlas-png-list', (data) => {
      const list = getAtlasPngList(data.atlasText)
      return list
    })
    ipc.answerMain('toast-message', (data: string) => {
      toast.info(data)
    })
  }, [])

  return (
    <div className='flex flex-col'>
      <Menu className='h-9' />
      <div className='h-[calc(100vh-2.25rem)] w-full'>
        <ResizablePanelGroup
          direction="horizontal"
          className="w-full h-full"
        >
          <ResizablePanel defaultSize={65}>
            <ResizablePrimitive.PanelGroup
              direction="vertical"
              ref={canvasLeftSideRef}
            >
              <ResizablePanel defaultSize={100} className='flex'>
                <Scene className='flex-1'/>
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel defaultSize={0}>
                <TimePanel />
              </ResizablePanel>
            </ResizablePrimitive.PanelGroup>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={35} minSize={25}>
            <ResourcePanel />
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
      <Toaster />
      {/* <Panel /> */}
    </div>
  );
};

export default App;