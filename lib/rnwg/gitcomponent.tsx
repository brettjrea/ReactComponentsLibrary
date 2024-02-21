import React, { useState } from 'react';
import git from 'https://esm.sh/isomorphic-git';
import LightningFS from 'https://esm.sh/@isomorphic-git/lightning-fs';
import http from 'https://esm.sh/isomorphic-git/http/web';

import MyButton from '../rnw//mybutton.tsx';

// Initialize fs and directory path
const fs = new LightningFS('fs', {wipe: true});
const pfs = fs.promises;
const dir = '/git';

const GitComponent = () => {
  const [status, setStatus] = useState('Ready');
  const [files, setFiles] = useState([]); // State to store directory contents

  const cloneRepo = async () => {
    setStatus('Cloning...');
    try {
      await git.clone({
        fs,
        http,
        dir,
        corsProxy: 'https://cors.isomorphic-git.org',
        url: 'https://github.com/isomorphic-git/isomorphic-git',
        ref: 'main',
        singleBranch: true,
        depth: 10,
      });
      const fileList = await pfs.readdir(dir); // List directory contents
      setFiles(fileList); // Update state with directory contents
      setStatus('Clone successful!');
    } catch (error) {
      console.error('Clone failed', error);
      setStatus('Clone failed');
    }
  };

  return (
    <div>
      <MyButton
        title="Start Clone"
        statusMessage={status}
        showStatus={!!status}
        onPress={cloneRepo} // Corrected function name to match the defined function
      />
      <p>Status: {status}</p>
      {status === 'Clone successful!' && (
        <div>
          <h3>Directory Contents:</h3>
          <ul>
            {files.map(file => (
              <li key={file}>{file}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default GitComponent;

