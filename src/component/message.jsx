import { Button, Card, Col, Flex, Input, Row } from 'antd';
import { useState } from 'react';

const Message = () => {
    const [message, setMessage] = useState('');
    const [chatHistory, setChatHistory] = useState([1]);

    const handleSendMessage = () => {

        setChatHistory([...chatHistory, message]);
        setMessage('');
    };

    return (
        <div>
            <Flex justify="center" gap="10px">
                <Row>
                    <Col span={24}>
                        <Card style={{ background: '#f2f2f2', width: '450px', height: '550px' }}>
                            <Flex style={{ marginTop: '20px', }}>
                                <Row justify="end">
                                    <h6>{chatHistory.map((msg, index) => (
                                        <div key={index}>{msg}</div>
                                    ))}</h6>
                                </Row>
                            </Flex>
                            <Input
                                style={{ marginTop: '340px' }}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Type your message here"
                                onPressEnter={handleSendMessage}
                            />
                            <Button

                                type="primary"
                                onClick={handleSendMessage}
                            >
                                Send
                            </Button>
                        </Card>
                    </Col>
                </Row>
            </Flex>
        </div>
    );
};

export default Message;
