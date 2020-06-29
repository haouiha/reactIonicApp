import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Home = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>HOME</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>content</IonContent>
		</IonPage>
	);
};

export default Home;
