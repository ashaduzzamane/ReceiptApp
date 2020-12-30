import React from 'react'
import { app } from './base'

function App() {
  const onFileChange = (e) => {
    const file = e.target.files[0]
    const storageRef = app.storage().ref()
    const fileRef = storageRef.child(file.name)
    fileRef.put(file).then(() => {
      console.log("uploaded file", file.name)
    })
    fileRef.getDownloadURL().then((value) => {
      console.log(value)
    })
  }

  const onSubmit = (e) => {
    e.preventDefault();

  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="file"  onChange={onFileChange} />
        <input type="text" name="userName" placeholder="Name" />
        <button>Submit</button>
      </form>
      <ul>
        <li>--</li>
      </ul>
    </div>
  );
}

export default App;
