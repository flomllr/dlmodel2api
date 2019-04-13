import React, { Component } from 'react';
import { AnchorButton, Button, Classes, Code, Dialog, H4, H5, Intent, Switch, Tooltip, FileInput, Spinner } from "@blueprintjs/core";

import './Overview.css'

class PreTest extends Component {
	render() {
		const {testButton} = this.props;

		return(
			<div>
				<div className={Classes.DIALOG_BODY}>
					<H4>
						<div style={{margin: "0 auto 20px auto"}}>
							Model Name
						</div>
					</H4>
					<p>
							Inputs:
					</p>

						<FileInput
							text="Upload picture"
							onInputChange={this.uploadFile}
							hasSelection="undefined"
							className='uploadBtn'
							style={{margin: "10px auto 50px auto"}}
							fill
						/>
						<p>
								Expected outputs:
						</p>

				</div>
				<div className="bp3-dialog-footer">
								<Button
										intent={Intent.SUCCESS}
										className="testButton bp3-large"
										onClick={testButton}
								>
										Perform test!
								</Button>
				</div>
			</div>
		)
	}
}



class Overview extends Component {
	state = {
			autoFocus: true,
			canEscapeKeyClose: true,
			canOutsideClickClose: true,
			enforceFocus: true,
			isOpen: false,
			usePortal: true,
			testStage: 0
	};

		render() {
			let dialogContent;
			if (this.state.testStage == 0) {
				dialogContent = <PreTest testButton={this.testButton}></PreTest>
			}else if (this.state.testStage == 1) {
				dialogContent = <Spinner className="testSpinner" intent="none" size="70" />
				setTimeout(() => {
					if (this.state.testStage == 1) {
						this.setState({testStage: 2});
					}}, 1000);
			}else if (this.state.testStage == 2) {
				dialogContent = <p>Results</p>
			}

			return (
				<div>
					<div className="preTest"></div>
		        <Dialog
		            icon="wrench"
		            onClose={this.handleClose}
		            title="Test run the model"
		            {...this.state}
		        >
							{dialogContent}
		        </Dialog>
					</div>
		  );
	  }

		testButton = () => this.setState({testStage: 1});
		// testButton = () =>
		handleOpen = () => this.setState({ isOpen: true , testStage: 0});
		handleClose = () => this.setState({ isOpen: false });
	}


export default Overview;
