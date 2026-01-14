/**
 * This file defines the Privacy Policy component.
 * It displays the privacy policy for the application.
 */

import React from "react";
import ContactMail from "@mui/icons-material/ContactMail";
import History from "@mui/icons-material/History";
import Lock from "@mui/icons-material/Lock";
import Policy from "@mui/icons-material/Policy";
import Public from "@mui/icons-material/Public";
import Security from "@mui/icons-material/Security";
import Shield from "@mui/icons-material/Shield";
import Update from "@mui/icons-material/Update";
import { Box, Chip, Container, Divider, List, ListItem, ListItemText, Paper, Typography } from "@mui/material";

import "../styles/DefaultPage.css";

const LAST_UPDATED = "January 1, 2026";


/**
 * Represents the Privacy Policy component.
 * @component
 * @returns {JSX.Element} The rendered Privacy Policy component.
 */
const PrivacyPolicy = () =>
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
                <Shield sx={{ fontSize: 60, mb: 2 }} />
                <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
                    Privacy Policy
                </Typography>
                <Chip 
                    icon={<Update />} 
                    label={`Last updated: ${LAST_UPDATED}`} 
                    sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white', fontWeight: 500 }}
                />
            </Box>
            
            <Paper elevation={3} sx={{ p: 4, mb: 3, borderLeft: '4px solid #667eea' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Policy sx={{ fontSize: 32, mr: 2, color: '#667eea' }} />
                    <Typography variant="h5" component="h2" sx={{ fontWeight: 600 }}>
                        Data Collection
                    </Typography>
                </Box>
                <Divider sx={{ mb: 2 }} />
                <Typography variant="body1" component="p" sx={{ lineHeight: 1.8, mb: 2 }}>
                    This application does not collect, store, or process any personal data from its users. 
                    We are committed to protecting your privacy and ensuring that your information 
                    remains completely private.
                </Typography>
            </Paper>

            <Paper elevation={3} sx={{ p: 4, mb: 3, borderLeft: '4px solid #f093fb' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Lock sx={{ fontSize: 32, mr: 2, color: '#f093fb' }} />
                    <Typography variant="h5" component="h2" sx={{ fontWeight: 600 }}>
                        Information We Don't Collect
                    </Typography>
                </Box>
                <Divider sx={{ mb: 2 }} />
                <List>
                    <ListItem sx={{ '&:hover': { bgcolor: 'action.hover' }, borderRadius: 1 }}>
                        <ListItemText 
                            primary="Personal identification information" 
                            sx={{ '& .MuiListItemText-primary': { fontWeight: 500 } }}
                        />
                    </ListItem>
                    <ListItem sx={{ '&:hover': { bgcolor: 'action.hover' }, borderRadius: 1 }}>
                        <ListItemText 
                            primary="Usage data or analytics" 
                            sx={{ '& .MuiListItemText-primary': { fontWeight: 500 } }}
                        />
                    </ListItem>
                    <ListItem sx={{ '&:hover': { bgcolor: 'action.hover' }, borderRadius: 1 }}>
                        <ListItemText 
                            primary="Cookies or tracking data" 
                            sx={{ '& .MuiListItemText-primary': { fontWeight: 500 } }}
                        />
                    </ListItem>
                    <ListItem sx={{ '&:hover': { bgcolor: 'action.hover' }, borderRadius: 1 }}>
                        <ListItemText 
                            primary="Device information" 
                            sx={{ '& .MuiListItemText-primary': { fontWeight: 500 } }}
                        />
                    </ListItem>
                    <ListItem sx={{ '&:hover': { bgcolor: 'action.hover' }, borderRadius: 1 }}>
                        <ListItemText 
                            primary="Location data" 
                            sx={{ '& .MuiListItemText-primary': { fontWeight: 500 } }}
                        />
                    </ListItem>
                </List>
            </Paper>

            <Paper elevation={3} sx={{ p: 4, mb: 3, borderLeft: '4px solid #4facfe' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Public sx={{ fontSize: 32, mr: 2, color: '#4facfe' }} />
                    <Typography variant="h5" component="h2" sx={{ fontWeight: 600 }}>
                        Third-Party Services
                    </Typography>
                </Box>
                <Divider sx={{ mb: 2 }} />
                <Typography variant="body1" component="p" sx={{ lineHeight: 1.8, mb: 2 }}>
                    While this application itself does not collect data, it may integrate with 
                    third-party services which have their own privacy policies. 
                    Please review their respective privacy policies for information about their data practices.
                </Typography>
            </Paper>

            <Paper elevation={3} sx={{ p: 4, mb: 3, borderLeft: '4px solid #43e97b' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Security sx={{ fontSize: 32, mr: 2, color: '#43e97b' }} />
                    <Typography variant="h5" component="h2" sx={{ fontWeight: 600 }}>
                        Data Security
                    </Typography>
                </Box>
                <Divider sx={{ mb: 2 }} />
                <Typography variant="body1" component="p" sx={{ lineHeight: 1.8, mb: 2 }}>
                    Since we do not collect any data, there is no personal information at risk. 
                    All interactions with the application are handled locally or through secure 
                    third-party services.
                </Typography>
            </Paper>

            <Paper elevation={3} sx={{ p: 4, mb: 3, borderLeft: '4px solid #fa709a' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <History sx={{ fontSize: 32, mr: 2, color: '#fa709a' }} />
                    <Typography variant="h5" component="h2" sx={{ fontWeight: 600 }}>
                        Changes to This Policy
                    </Typography>
                </Box>
                <Divider sx={{ mb: 2 }} />
                <Typography variant="body1" component="p" sx={{ lineHeight: 1.8, mb: 2 }}>
                    We may update this privacy policy from time to time. Any changes will be 
                    reflected on this page with an updated "Last updated" date.
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
                    If you have any questions about this privacy policy, please contact us through 
                    the application's support channels.
                </Typography>
            </Paper>
        </Container>
    );
};

export default PrivacyPolicy;
