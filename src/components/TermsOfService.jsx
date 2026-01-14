/**
 * This file defines the Terms of Service component.
 * It displays the terms of service for the application.
 */

import React from "react";
import Block from "@mui/icons-material/Block";
import CheckCircle from "@mui/icons-material/CheckCircle";
import Cloud from "@mui/icons-material/Cloud";
import ContactMail from "@mui/icons-material/ContactMail";
import Description from "@mui/icons-material/Description";
import Gavel from "@mui/icons-material/Gavel";
import History from "@mui/icons-material/History";
import Info from "@mui/icons-material/Info";
import Update from "@mui/icons-material/Update";
import Warning from "@mui/icons-material/Warning";
import { Box, Chip, Container, Divider, List, ListItem, ListItemText, Paper, Typography } from "@mui/material";

import "../styles/DefaultPage.css";

const LAST_UPDATED = "January 1, 2026";


/**
 * Represents the Terms of Service component.
 * @component
 * @returns {JSX.Element} The rendered Terms of Service component.
 */
const TermsOfService = () =>
{
    return (
        <Container className="default-page" maxWidth="md" sx={{ py: 6 }}>
            <Box sx={{ 
                textAlign: 'center', 
                mb: 5,
                bgcolor: '#667eea',
                borderRadius: 3,
                p: 4,
                color: 'white'
            }}>
                <Gavel sx={{ fontSize: 60, mb: 2 }} />
                <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
                    Terms of Service
                </Typography>
                <Chip 
                    icon={<Update />} 
                    label={`Last updated: ${LAST_UPDATED}`} 
                    sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white', fontWeight: 500 }}
                />
            </Box>

            <Paper elevation={3} sx={{ p: 4, mb: 3, borderLeft: '4px solid #f093fb' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <CheckCircle sx={{ fontSize: 32, mr: 2, color: '#f093fb' }} />
                    <Typography variant="h5" component="h2" sx={{ fontWeight: 600 }}>
                        Acceptance of Terms
                    </Typography>
                </Box>
                <Divider sx={{ mb: 2 }} />
                <Typography variant="body1" component="p" sx={{ lineHeight: 1.8, mb: 2 }}>
                    By using this application, you agree to be bound by these Terms of Service. 
                    If you do not agree to these terms, please do not use the application.
                </Typography>
            </Paper>

            <Paper elevation={3} sx={{ p: 4, mb: 3, borderLeft: '4px solid #667eea' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Description sx={{ fontSize: 32, mr: 2, color: '#667eea' }} />
                    <Typography variant="h5" component="h2" sx={{ fontWeight: 600 }}>
                        Service Description
                    </Typography>
                </Box>
                <Divider sx={{ mb: 2 }} />
                <Typography variant="body1" component="p" sx={{ lineHeight: 1.8, mb: 2 }}>
                    This is a web application that provides various features and services. 
                    The service is provided "as is" without warranties of any kind.
                </Typography>
            </Paper>

            <Paper elevation={3} sx={{ p: 4, mb: 3, borderLeft: '4px solid #43e97b' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <CheckCircle sx={{ fontSize: 32, mr: 2, color: '#43e97b' }} />
                    <Typography variant="h5" component="h2" sx={{ fontWeight: 600 }}>
                        Acceptable Use Policy
                    </Typography>
                </Box>
                <Divider sx={{ mb: 2 }} />
                <Typography variant="body1" component="p" sx={{ lineHeight: 1.8, mb: 2 }}>
                    You agree to use this application responsibly and in accordance with the following guidelines:
                </Typography>
                <List>
                    <ListItem sx={{ '&:hover': { bgcolor: 'action.hover' }, borderRadius: 1 }}>
                        <ListItemText 
                            primary="No Abuse" 
                            secondary="Do not flood the server with excessive requests or automated queries" 
                            slotProps={{ primary: { fontWeight: 600 } }}
                        />
                    </ListItem>
                    <ListItem sx={{ '&:hover': { bgcolor: 'action.hover' }, borderRadius: 1 }}>
                        <ListItemText 
                            primary="Fair Usage" 
                            secondary="Do not make an unreasonable number of requests that could impact service availability for other users" 
                            slotProps={{ primary: { fontWeight: 600 } }}
                        />
                    </ListItem>
                    <ListItem sx={{ '&:hover': { bgcolor: 'action.hover' }, borderRadius: 1 }}>
                        <ListItemText 
                            primary="Legal Compliance" 
                            secondary="Use the service only for lawful purposes and in compliance with applicable laws" 
                            slotProps={{ primary: { fontWeight: 600 } }}
                        />
                    </ListItem>
                    <ListItem sx={{ '&:hover': { bgcolor: 'action.hover' }, borderRadius: 1 }}>
                        <ListItemText 
                            primary="Respect Resources" 
                            secondary="Be mindful of server resources and use the application efficiently" 
                            slotProps={{ primary: { fontWeight: 600 } }}
                        />
                    </ListItem>
                </List>
            </Paper>

            <Paper elevation={3} sx={{ p: 4, mb: 3, borderLeft: '4px solid #ff6b6b', bgcolor: '#fff5f5' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Block sx={{ fontSize: 32, mr: 2, color: '#ff6b6b' }} />
                    <Typography variant="h5" component="h2" sx={{ fontWeight: 600, color: '#ff6b6b' }}>
                        Prohibited Activities
                    </Typography>
                </Box>
                <Divider sx={{ mb: 2 }} />
                <Typography variant="body1" component="p" sx={{ lineHeight: 1.8, mb: 2 }}>
                    The following activities are strictly prohibited and may result in immediate account suspension or ban:
                </Typography>
                <List>
                    <ListItem sx={{ '&:hover': { bgcolor: 'rgba(255,107,107,0.1)' }, borderRadius: 1 }}>
                        <ListItemText 
                            primary="Attempting to overload or crash the server" 
                            slotProps={{ primary: { fontWeight: 500 } }}
                        />
                    </ListItem>
                    <ListItem sx={{ '&:hover': { bgcolor: 'rgba(255,107,107,0.1)' }, borderRadius: 1 }}>
                        <ListItemText 
                            primary="Making excessive API calls or requests" 
                            slotProps={{ primary: { fontWeight: 500 } }}
                        />
                    </ListItem>
                    <ListItem sx={{ '&:hover': { bgcolor: 'rgba(255,107,107,0.1)' }, borderRadius: 1 }}>
                        <ListItemText 
                            primary="Using automated tools to abuse the service" 
                            slotProps={{ primary: { fontWeight: 500 } }}
                        />
                    </ListItem>
                    <ListItem sx={{ '&:hover': { bgcolor: 'rgba(255,107,107,0.1)' }, borderRadius: 1 }}>
                        <ListItemText 
                            primary="Attempting to reverse engineer or hack the application" 
                            slotProps={{ primary: { fontWeight: 500 } }}
                        />
                    </ListItem>
                    <ListItem sx={{ '&:hover': { bgcolor: 'rgba(255,107,107,0.1)' }, borderRadius: 1 }}>
                        <ListItemText 
                            primary="Using the service for illegal activities" 
                            slotProps={{ primary: { fontWeight: 500 } }}
                        />
                    </ListItem>
                </List>
            </Paper>

            <Paper elevation={3} sx={{ p: 4, mb: 3, borderLeft: '4px solid #ffa502' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Warning sx={{ fontSize: 32, mr: 2, color: '#ffa502' }} />
                    <Typography variant="h5" component="h2" sx={{ fontWeight: 600 }}>
                        Account Termination
                    </Typography>
                </Box>
                <Divider sx={{ mb: 2 }} />
                <Typography variant="body1" component="p" sx={{ lineHeight: 1.8, mb: 2 }}>
                    We reserve the right to suspend or ban users who violate these terms. 
                    Violations will be monitored and may result in immediate termination without warning.
                </Typography>
            </Paper>

            <Paper elevation={3} sx={{ p: 4, mb: 3, borderLeft: '4px solid #4facfe' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Cloud sx={{ fontSize: 32, mr: 2, color: '#4facfe' }} />
                    <Typography variant="h5" component="h2" sx={{ fontWeight: 600 }}>
                        Service Availability
                    </Typography>
                </Box>
                <Divider sx={{ mb: 2 }} />
                <Typography variant="body1" component="p" sx={{ lineHeight: 1.8, mb: 2 }}>
                    We strive to maintain high service availability but do not guarantee uninterrupted 
                    access. The service may be temporarily unavailable due to maintenance, updates, 
                    or technical issues.
                </Typography>
            </Paper>

            <Paper elevation={3} sx={{ p: 4, mb: 3, borderLeft: '4px solid #a29bfe' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Info sx={{ fontSize: 32, mr: 2, color: '#a29bfe' }} />
                    <Typography variant="h5" component="h2" sx={{ fontWeight: 600 }}>
                        Limitation of Liability
                    </Typography>
                </Box>
                <Divider sx={{ mb: 2 }} />
                <Typography variant="body1" component="p" sx={{ lineHeight: 1.8, mb: 2 }}>
                    This application is provided "as is" without warranties. We are not liable for any damages 
                    arising from the use or inability to use the service, including data loss or 
                    service interruptions.
                </Typography>
            </Paper>

            <Paper elevation={3} sx={{ p: 4, mb: 3, borderLeft: '4px solid #fd79a8' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <History sx={{ fontSize: 32, mr: 2, color: '#fd79a8' }} />
                    <Typography variant="h5" component="h2" sx={{ fontWeight: 600 }}>
                        Changes to Terms
                    </Typography>
                </Box>
                <Divider sx={{ mb: 2 }} />
                <Typography variant="body1" component="p" sx={{ lineHeight: 1.8, mb: 2 }}>
                    We may modify these terms at any time. Continued use of the service after 
                    changes constitutes acceptance of the updated terms.
                </Typography>
            </Paper>

            <Paper elevation={3} sx={{ p: 4, mb: 3, borderLeft: '4px solid #667eea', bgcolor: 'action.hover' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <ContactMail sx={{ fontSize: 32, mr: 2, color: '#667eea' }} />
                    <Typography variant="h5" component="h2" sx={{ fontWeight: 600 }}>
                        Contact
                    </Typography>
                </Box>
                <Divider sx={{ mb: 2 }} />
                <Typography variant="body1" component="p" sx={{ lineHeight: 1.8, mb: 2 }}>
                    If you have questions about these terms or need to report violations, 
                    please contact us through the application's support channels.
                </Typography>
            </Paper>
        </Container>
    );
};

export default TermsOfService;
