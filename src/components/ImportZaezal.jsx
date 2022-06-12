// react
import React, { useEffect, useState } from "react";

// firebase
import { DB } from "../firebase";
import { collection, query, onSnapshot, orderBy } from 'firebase/firestore';

// components
import Zaezal from "./Zaezal";

// style
import { ImportZaezalStyle } from "../styles/ImportZaezalStyle";

export default function ImportZaezal() {

  const [zaezals, setZaezals] = useState([]);
  
  useEffect(() => {
    const getZaezals = query(collection(DB, "zaezals"), orderBy("createdAt", "desc"));
    onSnapshot(getZaezals, snapshot => {
      const zaezalArr = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }))
      setZaezals(zaezalArr);
    })
  }, [])

  return (
    <ImportZaezalStyle>
      <div className="zaezals">
        {zaezals.map(zaezal => (
          <Zaezal 
            key={zaezal.id} 
            photoURL={zaezal.photoURL}
            userName={zaezal.userName}
            userEmail={zaezal.userEmail}
            ZaezalText={zaezal.text} 
            DownloadFile={zaezal.downloadFile}
          />
        ))}
      </div>
    </ImportZaezalStyle>
  )
}
