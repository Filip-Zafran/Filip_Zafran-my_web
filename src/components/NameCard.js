import React from 'react';
import BookDetail from './BookDetails';
import ProfilePicture from '../utils/ProfilePicture';

class NameCard extends React.Component {
	constructor() {
		super();
		this.state = {
			isModalOpened: false
		};
	}

	render() {
		// const nameCard = this.props.nameCard;
		const book = this.props.book;

		return (
			<div
				className="name-card"
				onMouseOver={() => this.setState({ isModalOpened: true })}
				onMouseOut={() => this.setState({ isModalOpened: false })}
			>
				<div className="name-card-inner">
					<div className="name-card-frontside">
						<h1>Filip Žafran</h1>
						<h3>FRONTEND DEVELOPER / MERN</h3>
					</div>

					<div className="name-card-backside">
						<ProfilePicture />
						<p className="name-card-backside-text">
							Professional experience in international, multilingual environments. Can adapt very quickly
							to a new tasks and to unknown mechanisms.Focus on multitasking, deadlines and strategic
							planning.Vast experience in transport and logistics.Excellent people management and IT
							skills.Advanced organizational and coordination skills.Very strong on reporting and
							presentations.Strong on cost supervision, structured system & procedural
							implementations.Main strength: Professional Communication{' '}
						</p>
					</div>
				</div>
				{this.state.isModalOpened && (
					<BookDetail
						OnModalClose={() => {
							this.setState({ isModalOpened: false });
						}}
					/>
				)}
			</div>
		);
	}
}

export default NameCard;
