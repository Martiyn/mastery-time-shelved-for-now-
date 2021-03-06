import { useState } from 'react';
import { Message, getMessage } from '../data/messages';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonNote,
  IonPage,
  IonToolbar,
  useIonViewWillEnter,
} from '@ionic/react';
import { personCircle } from 'ionicons/icons';
import { useParams } from 'react-router';
import './ViewMessage.css';
import Timer from '../data/timer.js'


function ViewMessage() {
  const [message, setMessage] = useState<Message>();
  const params = useParams<{ id: string }>();

  useIonViewWillEnter(() => {
    const msg = getMessage(parseInt(params.id, 10));
    setMessage(msg);
  });

  return (
    <IonPage id="view-message-page">
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons>
            <IonBackButton text="Skills" defaultHref="/home"></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        {message ? (
          <>
            <IonItem>
              <IonLabel>
                <h3>
                  Skill: <IonNote>Me</IonNote>
                </h3>
              </IonLabel>
            </IonItem>

            <div className="ion-padding">
              <h1>To master a skill you need 10000 hours!</h1>

          <p>You've spent:</p> <Timer /> <p>keep it up champ!</p>         
              
            </div>
          </>
        ) : (
          <div></div>
          )  
        }
      </IonContent>
    </IonPage>
  );
}

export default ViewMessage;
