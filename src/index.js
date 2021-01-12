import React from "react";
import ReactDOM from "react-dom";
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
  Text
} from "react-atomize";

const theme = {
...DefaultTheme,
  grid: {
  	...DefaultTheme.grid,
    colCount: 12,
    gutterWidth: 0
  }
};

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Row >
    	<Col size={{ xs: 12, lg: 1 }}>
	        
	      </Col>
	    	<Col size={{ xs: 12, lg: 1 }}>
	        <Image
	          src="./img/ar_grey.png"
	           h="3rem"
	           w="auto"
    			
	          
	        />
	      </Col>

	      <Col size={{ xs: 12, lg: 6 }}>
	        
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
			    prefix={
			      <Icon
			        name="EyeSolid"
			        size="16px"
			        color="white"
			        m={{ r: "0.5rem" }}
			      />
			    }
			    bg="info600"
			    
			    rounded="circle"
			    p={{ r: "1.5rem", l: "1rem" }}
			    shadow="1"
			    hoverShadow="2"
			  >
			    Login
			  </Button>
	      </Col>
	      <Col size={{ xs: 12, lg: 1 }}>
	        
	      </Col>
    </Row>
    <Container>
    	<Div d="flex">
		  <Button
		    h="2.5rem"
		    w="2.5rem"
		    bg="warning700"
		    hoverBg="warning600"
		    rounded="circle"
		    m={{ r: "1rem" }}
		    shadow="2"
		    hoverShadow="4"
		  >
		    <Icon name="Search" size="20px" color="white" />
		  </Button>
		  <Button
		    h="2.5rem"
		    w="2.5rem"
		    bg="info700"
		    hoverBg="info600"
		    rounded="circle"
		    m={{ r: "1rem" }}
		    shadow="2"
		    hoverShadow="4"
		  >
		    <Icon name="BookmarkSolid" size="20px" color="white" />
		  </Button>
		  <Button
		    h="2.5rem"
		    w="2.5rem"
		    bg="danger700"
		    hoverBg="danger600"
		    rounded="circle"
		    m={{ r: "1rem" }}
		    shadow="2"
		    hoverShadow="4"
		  >
		    <Icon name="DeleteSolid" size="20px" color="white" />
		  </Button>
		  <Button
		    h="2.5rem"
		    w="2.5rem"
		    bg="success700"
		    hoverBg="success600"
		    rounded="circle"
		    m={{ r: "1rem" }}
		    shadow="2"
		    hoverShadow="4"
		  >
		    <Icon name="Play" size="20px" color="white" />
		  </Button>
		  <Button
		    h="2.5rem"
		    w="2.5rem"
		    bg="danger300"
		    hoverBg="danger400"
		    rounded="lg"
		    m={{ r: "1rem" }}
		  >
		    <Icon name="HeartSolid" size="20px" color="danger700" />
		  </Button>
		  <Button
		    h="2.5rem"
		    w="2.5rem"
		    bg="info300"
		    hoverBg="info400"
		    rounded="lg"
		    m={{ r: "1rem" }}
		  >
		    <Icon name="CameraSolid" size="20px" color="info700" />
		  </Button>
		  <Button
		    h="2.5rem"
		    w="2.5rem"
		    bg="success300"
		    hoverBg="success400"
		    rounded="lg"
		    m={{ r: "1rem" }}
		  >
		    <Icon name="MessageSolid" size="20px" color="success700" />
		  </Button>
		  <Button
		    h="2.5rem"
		    w="2.5rem"
		    bg="info300"
		    hoverBg="info400"
		    rounded="lg"
		    m={{ r: "1rem" }}
		  >
		    <Icon name="Attachment" size="20px" color="info700" />
		  </Button>
		</Div>
  	</Container>
  	
  	<Row>
  	<Col size={{ xs: 12, lg: 2 }}></Col>
  	<Col size={{ xs: 12, lg: 2 }}>
  		<Container>
	  		<Div bg="white" shadow="2" rounded="xl" m={{ b: "1rem" }} p="1.5rem">
			    <Div
			      border={{ b: "1px solid" }}
			      borderColor="gray300"
			      p={{ b: "0.75rem" }}
			    >
			    <Text textSize="title" textWeight="500">
			        $1,410.16
			      </Text>
			      <Text textSize="caption" textColor="light">
			        per month
			      </Text>
			    </Div>
			    <Div d="flex" justify="space-between" p={{ t: "1rem", b: "1.5rem" }}>
			      <Div>
			        <Text textSize="caption" textColor="dark">
			          Payment Card
			        </Text>
			        <Text textSize="caption" textColor="light">
			          Component
			        </Text>
			        </Div>
			        </Div>
			         <Button
					    h="2.5rem"
					    w="2.5rem"
					    bg="danger700"
					    hoverBg="danger600"
					    rounded="circle"
					    m={{ r: "1rem" }}
					    shadow="2"
					    hoverShadow="4"
					  >
					    <Icon name="DeleteSolid" size="20px" color="white" />
					  </Button>
		    </Div>
	  	</Container>
	  	</Col>

	  	<Col size={{ xs: 12, lg: 2 }}>
  		<Container>
	  		<Div bg="white" shadow="2" rounded="xl" m={{ b: "1rem" }} p="1.5rem">
			    <Div
			      border={{ b: "1px solid" }}
			      borderColor="gray300"
			      p={{ b: "0.75rem" }}
			    >
			    <Text textSize="title" textWeight="500">
			        $1,410.16
			      </Text>
			      <Text textSize="caption" textColor="light">
			        per month
			      </Text>
			    </Div>
			    <Div d="flex" justify="space-between" p={{ t: "1rem", b: "1.5rem" }}>
			      <Div>
			        <Text textSize="caption" textColor="dark">
			          Payment Card
			        </Text>
			        <Text textSize="caption" textColor="light">
			          Component
			        </Text>
			        </Div>
			        </Div>
			         <Button
		    h="2.5rem"
		    w="2.5rem"
		    bg="info300"
		    hoverBg="info400"
		    rounded="lg"
		    m={{ r: "1rem" }}
		  >
		    <Icon name="Attachment" size="20px" color="info700" />
		  </Button>
		    </Div>
	  	</Container>
	  	</Col>

	  	<Col size={{ xs: 12, lg: 2 }}>
  		<Container>
	  		<Div bg="white" shadow="2" rounded="xl" m={{ b: "1rem" }} p="1.5rem">
			    <Div
			      border={{ b: "1px solid" }}
			      borderColor="gray300"
			      p={{ b: "0.75rem" }}
			    >
			    <Text textSize="title" textWeight="500">
			        $1,410.16
			      </Text>
			      <Text textSize="caption" textColor="light">
			        per month
			      </Text>
			    </Div>
			    <Div d="flex" justify="space-between" p={{ t: "1rem", b: "1.5rem" }}>
			      <Div>
			        <Text textSize="caption" textColor="dark">
			          Payment Card
			        </Text>
			        <Text textSize="caption" textColor="light">
			          Component
			        </Text>
			        </Div>
			        </Div>
			         <Button
					    h="2.5rem"
					    w="2.5rem"
					    bg="danger700"
					    hoverBg="danger600"
					    rounded="circle"
					    m={{ r: "1rem" }}
					    shadow="2"
					    hoverShadow="4"
					  >
					    <Icon name="DeleteSolid" size="20px" color="white" />
					  </Button>
		    </Div>
	  	</Container>
	  	</Col>

	  	<Col size={{ xs: 12, lg: 2 }}>
  		<Container>
	  		<Div bg="white" shadow="2" rounded="xl" m={{ b: "1rem" }} p="1.5rem">
			    <Div
			      border={{ b: "1px solid" }}
			      borderColor="gray300"
			      p={{ b: "0.75rem" }}
			    >
			    <Text textSize="title" textWeight="500">
			        $1,410.16
			      </Text>
			      <Text textSize="caption" textColor="light">
			        per month
			      </Text>
			    </Div>
			    <Div d="flex" justify="space-between" p={{ t: "1rem", b: "1.5rem" }}>
			      <Div>
			        <Text textSize="caption" textColor="dark">
			          Payment Card
			        </Text>
			        <Text textSize="caption" textColor="light">
			          Component
			        </Text>
			        </Div>
			        </Div>
			          <Button
		    h="2.5rem"
		    w="2.5rem"
		    bg="warning700"
		    hoverBg="warning600"
		    rounded="circle"
		    m={{ r: "1rem" }}
		    shadow="2"
		    hoverShadow="4"
		  >
		    <Icon name="Search" size="20px" color="white" />
		  </Button>
		    </Div>
	  	</Container>
	  	</Col>
  	</Row>

  </ThemeProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
