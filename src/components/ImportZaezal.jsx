// react
import React, { useEffect, useState } from "react";
// firebase
import { myAuth, DB } from "../firebase";
import { collection, query, onSnapshot, orderBy, limit } from 'firebase/firestore';
// react-intersection-observer
import { useInView } from "react-intersection-observer";
// components
import Zaezal from "./Zaezal";
// style
import { ImportZaezalStyle } from "../styles/ImportZaezalStyle";

export default function ImportZaezal() {
  // react-intersection-observer
  const [ref, inView] = useInView({ rootMargin: "0px 0px 30px 0px" })
  const [count, setCount] = useState(3);
  // zaezals
  const [zaezals, setZaezals] = useState([]);
  
  useEffect(() => {
    const getZaezals = query(
      collection(DB, "zaezals"), 
      limit(count),
      orderBy("createdAt", "desc"));
    onSnapshot(getZaezals, snapshot => {
      const zaezalArr = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }))
      setZaezals(zaezalArr);
    })
  }, [count])

  // inView
  useEffect(() => {
    if (inView) {
      setCount(prev => prev + 1);
    }
  }, [inView])

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
      <div ref={ref} />
    </ImportZaezalStyle>
  )
}
