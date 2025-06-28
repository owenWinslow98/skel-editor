import React, { useEffect, useState } from 'react';
import Menu from './components/Menu';
import { Button } from './ui/button';
import Scene from './components/Scen/Scen';
import store from './store';
import { Provider } from 'react-redux';
import Panel from './components/Panel';
import ResourcePanel from './layout/ResourcePanel';
import TimePanel from './layout/TimePanel';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from './ui/resizable';
import { useAppSelector } from './hooks/redux';
import { getAtlasPngList } from './lib/utils';
import { Toaster } from './ui/sonner';
import { toast } from 'sonner';
const App: React.FC = () => {
  // const [panelWidth, setPanelWidth] = useState(256);



  const { isBlackUISkin } = useAppSelector(state => state.global);
  useEffect(() => {
    const { classList } = document.body;
    isBlackUISkin ? classList.add('dark') : classList.remove('dark');
  }, [isBlackUISkin]);

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
    <div className='flex flex-col w-screen h-screen'>
      <Menu />
      <div className='w-full h-full flex'>
        {/* <ResizablePanelGroup
            direction="horizontal"
            className="w-full h-full"
          >
            <ResizablePanel defaultSize={80}>
              <Scene className="w-full h-full" />
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={20}>
              <ResourcePanel />
            </ResizablePanel>
          </ResizablePanelGroup> */}
        <div className='flex-1 flex flex-col'>
          <Scene className='flex-1' />
          <TimePanel />
        </div>
        <ResourcePanel />
      </div>
      <Toaster />
      {/* <Panel /> */}
    </div>
  );
};

export default App;