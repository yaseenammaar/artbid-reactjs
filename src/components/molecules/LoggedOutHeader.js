import React, {useState} from "react";
import {
  ThemeProvider,
  Div,
  Row,
  Col,
  Container,
  DefaultTheme,
  Image,
  Button,
  Icon,
  Text,
  Modal,
  Input
} from "react-atomize";

const theme = {
	...DefaultTheme,
	  grid: {
		  ...DefaultTheme.grid,
		colCount: 12,
		gutterWidth: 0
	  },
	  fontFamily: {
		primary: "equity-text, serif",
	  }
	};




	
	export default function LoggedOutHeader() {
		const [isOpen, setIsOpen] = useState(false);
		function close(){
			setIsOpen(false)
		}

	  return (
		<ThemeProvider theme={theme}>
		<Row >
    	<Col size={{ xs: 12, lg: 2 }}>
	        
			</Col>
				<Col size={{ xs: 12, lg: 1 }}>
				<Image
				src="./img/ar_grey.png"
				h="2rem"
				w="auto"
				/>
			</Col>

			<Col size={{ xs: 12, lg: 4 }}>
				
			</Col>
			<Col size={{ xs: 12, lg: 1 }}>
				<Button
					h="2.5rem"
					p={{ x: "1rem" }}
					textSize="body"
					textColor="gray900"
					bg="white"
					m={{ r: "0.5rem" }}
				>
					About
				</Button>
			</Col>
			
			<Col size={{ xs: 12, lg: 1 }}>
				<Button
					h="2.5rem"
					p={{ x: "1rem" }}
					textSize="body"
					textColor="gray900"
					bg="white"
					m={{ r: "0.5rem" }}
				>
					Contact
				</Button>
			</Col>
			<Col size={{ xs: 12, lg: 1 }}>
				<Button
					bg="white"
					textColor="gray900"
					p={{ r: "3rem", l: "3rem" }}
					shadow="1"
					hoverShadow="2"
					onClick={() => setIsOpen(true)}
				>
					Login
				</Button>
			</Col>
			<Col size={{ xs: 12, lg: 2 }}>
				
			</Col>
		</Row>

		<Modal isOpen={isOpen} onClose={close} align="center" rounded="md" shadow="1">
		<Icon
			name="Cross"
			pos="absolute"
			top="1rem"
			right="1rem"
			size="16px"
			onClick={close}
			cursor="pointer"
		/>
		<Div fontFamily="secondary" textSize="heading" d="flex" justify="center">
			<Text>
				Login/Register
			</Text>
		</Div>
		<Div d="flex" m={{ t: "2rem", b: "2rem" }}>
			<Input
				placeholder="Phone Number"
				p={{ x: "2.5rem" }}
				prefix={
					<Icon
					name="UserSolid"
					color="info800"
					size="16px"
					cursor="pointer"
					pos="absolute"
					top="50%"
					left="0.75rem"
					transform="translateY(-50%)"
					/>
				}
				/>
		</Div>
		<Div d="flex" justify="center">
			<Button onClick={close} bg="info700">
			Send OTP
			</Button>
		</Div>
		</Modal>
	  </ThemeProvider>
	  );
	}