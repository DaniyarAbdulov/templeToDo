import {CSSProperties, FC} from 'react'
import {Container} from '@mui/material'

import Sync from './components/sync'
import Async from './components/async'

const App: FC = () => {
	return (
		<Container sx={styles.container}>
			<h3>Jusan SandBox</h3>
			<div style={styles.wrapper}>
				<Sync />
				<Async />
			</div>
		</Container>
	)
}

const styles: {[key: string]: CSSProperties} = {
	container: {
		alignItems:"center", 
		display:"flex",
		flexDirection:"column"
	},
	wrapper: {
		display:"flex",
		width:"100%",
		justifyContent:"space-between"
	}
}

export default App
