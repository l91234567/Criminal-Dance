import React, { useState, useRef, useEffect } from "react";
import { Box, TextField, IconButton, Typography, Avatar, Paper, Container, Stack } from "@mui/material";
import { styled } from "@mui/system";
import { IoSend } from "react-icons/io5";

const ChatContainer = styled(Box)(({ theme }) => ({
  height: "50vh",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#f5f5f5",
  borderRadius: "12px",
  overflow: "hidden"
}));

const MessagesArea = styled(Box)({
  flex: 1,
  overflowY: "auto",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  gap: "16px"
});

const MessageBubble = styled(Paper)(({ isOwn }) => ({
  padding: "12px 16px",
  maxWidth: "70%",
  width: "fit-content",
  borderRadius: "12px",
  backgroundColor: isOwn ? "#1976d2" : "#ffffff",
  color: isOwn ? "#ffffff" : "#000000",
  alignSelf: isOwn ? "flex-end" : "flex-start",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
}));

const InputArea = styled(Box)({
  padding: "20px",
  backgroundColor: "#ffffff",
  borderTop: "1px solid #e0e0e0"
});

const dummyMessages = [
  {
    id: 1,
    sender: "Alice Chen",
    message: "Hey team! I've finished setting up the development environment for our website deployment.",
    isOwn: false
  },
  {
    id: 2,
    sender: "Bob Smith",
    message: "Great work! Did you configure the CI/CD pipeline as discussed?",
    isOwn: true
  },
  {
    id: 3,
    sender: "Carol Johnson",
    message: "I can help with the deployment scripts if needed.",
    isOwn: false
  },
  {
    id: 4,
    sender: "David Wilson",
    message: "Let's make sure we have all the environment variables properly set before proceeding.",
    isOwn: false
  },
  {
    id: 2,
    sender: "Bob Smith",
    message: "Gr22figure the CI/CD pipeline as discussed?",
    isOwn: false
  },
];

const GroupChat = () => {
  const [messages, setMessages] = useState(dummyMessages);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        id: messages.length + 1,
        sender: "Bob Smith",
        message: newMessage,
        isOwn: true
      };
      setMessages([...messages, message]);
      setNewMessage("");
    }
  };
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom()
  }, [messages]);


  return (
    <Container maxWidth="md">
      <ChatContainer>
        <MessagesArea>
          {messages.map((msg) => (
            <Box key={msg.id} sx={{ display: "flex", flexDirection: "column", alignItems: msg.isOwn ? "flex-end" : "flex-start" }}>
              <Stack
                direction={msg.isOwn ? "row-reverse" : "row"}
                spacing={1}
                alignItems="center"
                sx={{ mb: 1 }}
              >
                
                <Typography variant="subtitle2" color="text.secondary">
                  {msg.sender}
                </Typography>
              </Stack>
              <MessageBubble isOwn={msg.isOwn}>
                <Typography variant="body2">{msg.message}</Typography>
                <Typography variant="caption" color={msg.isOwn ? "rgba(255,255,255,0.7)" : "text.secondary"}>
                </Typography>
              </MessageBubble>
              <div ref={messagesEndRef} />
            </Box>
            
          ))}
          <div ref={messagesEndRef} />
        </MessagesArea>
        <InputArea>
          <Box sx={{ display: "flex", gap: 1 }}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Type a message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              size="small"
            />
            <IconButton
              color="primary"
              onClick={handleSendMessage}
              disabled={!newMessage.trim()}
            >
              <IoSend />
            </IconButton>
          </Box>
        </InputArea>
      </ChatContainer>
    </Container>
  );
};

export default GroupChat;