// react
import React, { useEffect, useState } from "react";
// firebase
import { myAuth, DB } from "../firebase";
import { collection, query, onSnapshot, orderBy } from 'firebase/firestore';
// components
import Zaezal from "./Zaezal";
// style
import { ImportZaezalStyle } from "../styles/ImportZaezalStyle";

export default function ImportZaezal() {
  // zaezals
  const [zaezals, setZaezals] = useState([]);
  
  useEffect(() => {
    // getZaezals form firebase
    const getZaezals = query(
      collection(DB, "zaezals"), 
      orderBy("createdAt", "desc"));
    
    onSnapshot(getZaezals, snapshot => {
      const zaezalArr = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }))

      setZaezals(zaezalArr.filter(item => item.creatorId === myAuth.currentUser.uid));
    })
  }, [])

  return (
    <ImportZaezalStyle>
      <div className="zaezals">
        {
          zaezals.map(zaezal => (
            <Zaezal 
              key={zaezal.id} 
              userId={zaezal.id}
              createdAt={zaezal.createdAt}
              photoURL={zaezal.photoURL}
              userName={zaezal.userName}
              userEmail={zaezal.userEmail}
              ZaezalText={zaezal.text} 
              DownloadFile={zaezal.downloadFile}
              isOwner={zaezal.creatorId === myAuth.currentUser.uid}
            />
          ))
        }
      </div>
    </ImportZaezalStyle>
  )
}
