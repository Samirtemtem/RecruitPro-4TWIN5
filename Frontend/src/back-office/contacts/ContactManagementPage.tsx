import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// Interface for contact message data
interface ContactMessage {
  _id: string;
  username: string;
  email: string;
  subject: string;
  message: string;
  createdAt?: string;
}

const ContactManagementPage: React.FC = () => {
  const [contacts, setContacts] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedContact, setSelectedContact] = useState<ContactMessage | null>(null);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Fetch contact messages from the backend
  useEffect(() => {
    const fetchContacts = async () => {
      setLoading(true);
      try {
        const response = await axios.get('http://localhost:5000/api/contact/contacts');
        setContacts(response.data);
        setError(null);
      } catch (err: any) {
        setError(err.message || 'Failed to fetch contact messages');
        console.error('Error fetching contacts:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  // Filter contacts based on search term
  const filteredContacts = contacts.filter(contact => {
    const searchTermLower = searchTerm.toLowerCase();
    return (
      contact.username.toLowerCase().includes(searchTermLower) ||
      contact.email.toLowerCase().includes(searchTermLower) ||
      contact.subject.toLowerCase().includes(searchTermLower)
    );
  });

  // Paginate contacts
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentContacts = filteredContacts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredContacts.length / itemsPerPage);

  // Function to handle contact deletion
  const handleDeleteContact = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this message?')) return;
    
    try {
      await axios.delete(`http://localhost:5000/api/contact/contact/${id}`);
      setContacts(prevContacts => prevContacts.filter(contact => contact._id !== id));
      
      if (selectedContact && selectedContact._id === id) {
        setSelectedContact(null);
        setShowDetailModal(false);
      }
    } catch (err: any) {
      console.error('Error deleting contact:', err);
      alert('Failed to delete contact message. Please try again.');
    }
  };

  // Function to view contact details
  const handleViewContact = (contact: ContactMessage) => {
    setSelectedContact(contact);
    setShowDetailModal(true);
  };

  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="page-title">Contact Management</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/adminDashboard">Dashboard</Link>
                </li>
                <li className="breadcrumb-item active">Contact Messages</li>
              </ul>
            </div>
            <div className="col-auto">
              <div className="contact-count">
                <h3>{contacts.length}</h3>
                <p>Total Messages</p>
              </div>
            </div>
          </div>
        </div>

        {/* Search Row */}
        <div className="row mb-4">
          <div className="col-sm-6">
            <div className="form-group mb-0 position-relative">
              <i className="fas fa-search search-icon"></i>
              <input 
                type="text" 
                className="form-control search-input" 
                placeholder="Search by name, email or subject..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="col-sm-6 text-end">
            <div className="search-result-info">
              <span>Found: {filteredContacts.length} messages</span>
            </div>
          </div>
        </div>

        {/* Contact Messages List */}
        <div className="row">
          <div className="col-md-12">
            <div className="card contact-card">
              <div className="card-body">
                {loading ? (
                  <div className="text-center p-4">
                    <div className="spinner-border text-primary" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                    <p className="mt-3">Loading contact messages...</p>
                  </div>
                ) : error ? (
                  <div className="alert alert-danger" role="alert">
                    <i className="fas fa-exclamation-triangle me-2"></i> {error}
                  </div>
                ) : filteredContacts.length === 0 ? (
                  <div className="text-center p-4">
                    <div className="empty-state-icon">
                      <i className="far fa-envelope-open"></i>
                    </div>
                    <h4>No contact messages found</h4>
                    <p>There are no messages matching your search criteria.</p>
                  </div>
                ) : (
                  <>
                    <div className="grid-container">
                      {currentContacts.map((contact) => (
                        <div 
                          key={contact._id} 
                          className="contact-card-item"
                          onClick={() => handleViewContact(contact)}
                        >
                          <div className="contact-card-header">
                            <div className="contact-avatar">
                              {contact.username.charAt(0).toUpperCase()}
                            </div>
                            <div className="contact-info">
                              <h3 className="contact-name">{contact.username}</h3>
                              <a 
                                href={`mailto:${contact.email}`} 
                                className="contact-email"
                                onClick={(e) => e.stopPropagation()}
                              >
                                {contact.email}
                              </a>
                            </div>
                            <div className="contact-actions">
                              <button 
                                className="btn-icon btn-view"
                                onClick={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  handleViewContact(contact);
                                }}
                              >
                                <i className="far fa-eye"></i>
                              </button>
                              <button 
                                className="btn-icon btn-delete"
                                onClick={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  handleDeleteContact(contact._id);
                                }}
                              >
                                <i className="far fa-trash-alt"></i>
                              </button>
                            </div>
                          </div>
                          <div className="contact-card-body">
                            <div className="contact-subject">
                              <h4>Subject:</h4>
                              <p>{contact.subject}</p>
                            </div>
                            <div className="contact-preview">
                              <p>
                                {contact.message.length > 120
                                  ? `${contact.message.substring(0, 120)}...`
                                  : contact.message}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Pagination */}
                    {totalPages > 1 && (
                      <div className="pagination-container">
                        <div className="pagination-info">
                          Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, filteredContacts.length)} of {filteredContacts.length} messages
                        </div>
                        <nav aria-label="Page navigation">
                          <ul className="pagination">
                            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                              <a 
                                href="#" 
                                className="page-link"
                                onClick={(e) => {
                                  e.preventDefault();
                                  if (currentPage > 1) setCurrentPage(currentPage - 1);
                                }}
                              >
                                <i className="fas fa-chevron-left"></i>
                              </a>
                            </li>
                            
                            {[...Array(totalPages)].map((_, i) => (
                              <li key={i} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
                                <a 
                                  href="#" 
                                  className="page-link"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    setCurrentPage(i + 1);
                                  }}
                                >
                                  {i + 1}
                                </a>
                              </li>
                            ))}
                            
                            <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                              <a 
                                href="#" 
                                className="page-link"
                                onClick={(e) => {
                                  e.preventDefault();
                                  if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                                }}
                              >
                                <i className="fas fa-chevron-right"></i>
                              </a>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Message Detail Modal */}
      {showDetailModal && selectedContact && (
        <div className="modal-backdrop">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <div className="modal-title-container">
                  <div className="modal-avatar">
                    {selectedContact.username.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h5 className="modal-title">{selectedContact.username}</h5>
                    <a href={`mailto:${selectedContact.email}`} className="modal-email">
                      {selectedContact.email}
                    </a>
                  </div>
                </div>
                <button 
                  type="button" 
                  className="btn-close"
                  onClick={() => setShowDetailModal(false)}
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
              <div className="modal-body">
                <div className="message-subject">
                  <h4>Subject</h4>
                  <div className="subject-value">{selectedContact.subject}</div>
                </div>

                <div className="message-content">
                  <h4>Message</h4>
                  <div className="message-value">
                    {selectedContact.message.split('\n').map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button 
                  type="button" 
                  className="btn btn-outline-secondary"
                  onClick={() => setShowDetailModal(false)}
                >
                  Close
                </button>
                <button 
                  type="button"
                  className="btn btn-danger"
                  onClick={() => handleDeleteContact(selectedContact._id)}
                >
                  <i className="far fa-trash-alt me-2"></i> Delete
                </button>
                <button 
                  type="button"
                  className="btn btn-primary"
                  onClick={() => window.location.href = `mailto:${selectedContact.email}?subject=Re: ${selectedContact.subject}`}
                >
                  <i className="fas fa-reply me-2"></i> Reply
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CSS styles */}
      <style>
        {`
          /* General Styles */
          .page-header {
            margin-bottom: 24px;
            padding: 20px;
            background: linear-gradient(135deg, #6b73ff 0%, #000dff 100%);
            border-radius: 10px;
            color: white;
            box-shadow: 0 4px 20px rgba(0, 13, 255, 0.15);
          }
          
          .page-title {
            font-weight: 600;
            margin-bottom: 8px;
          }
          
          .breadcrumb {
            padding: 0;
            margin: 0;
            background: transparent;
          }
          
          .breadcrumb-item a {
            color: rgba(255, 255, 255, 0.8);
            text-decoration: none;
          }
          
          .breadcrumb-item.active {
            color: rgba(255, 255, 255, 0.9);
          }
          
          .contact-count {
            background: rgba(255, 255, 255, 0.2);
            padding: 10px 20px;
            border-radius: 8px;
            text-align: center;
          }
          
          .contact-count h3 {
            margin: 0;
            font-weight: 600;
            font-size: 28px;
          }
          
          .contact-count p {
            margin: 0;
            font-size: 14px;
            opacity: 0.9;
          }
          
          /* Search Styles */
          .search-input {
            height: 50px;
            border-radius: 25px;
            padding-left: 50px;
            font-size: 16px;
            border: none;
            box-shadow: 0 2px 15px rgba(0, 0, 0, 0.08);
            transition: all 0.3s;
          }
          
          .search-input:focus {
            box-shadow: 0 2px 20px rgba(0, 0, 0, 0.12);
          }
          
          .search-icon {
            position: absolute;
            left: 20px;
            top: 17px;
            color: #6b73ff;
            font-size: 16px;
          }
          
          .search-result-info {
            padding: 10px;
            font-size: 14px;
            color: #666;
            background: #f8f9fa;
            border-radius: 8px;
            display: inline-block;
            padding: 8px 16px;
          }
          
          /* Grid Layout */
          .contact-card {
            border-radius: 10px;
            box-shadow: 0 2px 20px rgba(0, 0, 0, 0.05);
            border: none;
            overflow: hidden;
          }
          
          .grid-container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 20px;
            padding: 10px;
          }
          
          .contact-card-item {
            background: white;
            border-radius: 12px;
            box-shadow: 0 3px 15px rgba(0, 0, 0, 0.08);
            overflow: hidden;
            transition: all 0.3s;
            cursor: pointer;
            height: 100%;
            display: flex;
            flex-direction: column;
            border: 1px solid #f0f0f0;
          }
          
          .contact-card-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
          }
          
          .contact-card-header {
            padding: 20px;
            display: flex;
            align-items: center;
            position: relative;
            background: #f8faff;
            border-bottom: 1px solid #f0f0f0;
          }
          
          .contact-avatar {
            width: 48px;
            height: 48px;
            border-radius: 50%;
            background: linear-gradient(135deg, #6b73ff 0%, #000dff 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 15px;
            font-size: 18px;
            color: white;
            font-weight: bold;
            flex-shrink: 0;
          }
          
          .contact-info {
            flex-grow: 1;
          }
          
          .contact-name {
            font-weight: 600;
            font-size: 16px;
            margin: 0 0 5px 0;
            color: #333;
          }
          
          .contact-email {
            color: #6b73ff;
            font-weight: 500;
            text-decoration: none;
            font-size: 14px;
            display: block;
          }
          
          .contact-email:hover {
            text-decoration: underline;
          }
          
          .contact-actions {
            display: flex;
            gap: 8px;
          }
          
          .contact-card-body {
            padding: 20px;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
          }
          
          .contact-subject {
            margin-bottom: 15px;
          }
          
          .contact-subject h4 {
            font-size: 14px;
            color: #666;
            margin-bottom: 5px;
            font-weight: 500;
          }
          
          .contact-subject p {
            font-size: 16px;
            font-weight: 600;
            color: #333;
            margin: 0;
          }
          
          .contact-preview {
            flex-grow: 1;
          }
          
          .contact-preview p {
            font-size: 14px;
            color: #666;
            line-height: 1.5;
            margin: 0;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
          }
          
          /* Action Buttons */
          .btn-icon {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            border: none;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.2s;
          }
          
          .btn-view {
            background: #e8eaff;
            color: #6b73ff;
          }
          
          .btn-view:hover {
            background: #d0d4ff;
            transform: scale(1.05);
          }
          
          .btn-delete {
            background: #ffe8e8;
            color: #ff4d4d;
          }
          
          .btn-delete:hover {
            background: #ffd0d0;
            transform: scale(1.05);
          }
          
          /* Modal Styles */
          .modal-backdrop {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(5px);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1050;
          }
          
          .modal-dialog {
            width: 600px;
            max-width: 95%;
            max-height: 90vh;
          }
          
          .modal-content {
            border-radius: 15px;
            border: none;
            box-shadow: 0 15px 50px rgba(0, 0, 0, 0.15);
            overflow: hidden;
          }
          
          .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px;
            background: #f8faff;
            border-bottom: 1px solid #f0f0f0;
          }
          
          .modal-title-container {
            display: flex;
            align-items: center;
          }
          
          .modal-avatar {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: linear-gradient(135deg, #6b73ff 0%, #000dff 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 15px;
            font-size: 20px;
            color: white;
            font-weight: bold;
          }
          
          .modal-title {
            font-weight: 600;
            font-size: 18px;
            margin: 0 0 5px 0;
          }
          
          .modal-email {
            color: #6b73ff;
            text-decoration: none;
            font-size: 14px;
          }
          
          .btn-close {
            background: none;
            border: none;
            color: #999;
            font-size: 20px;
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 36px;
            height: 36px;
            border-radius: 50%;
            transition: all 0.2s;
          }
          
          .btn-close:hover {
            background: #f0f0f0;
            color: #333;
          }
          
          .modal-body {
            padding: 25px;
          }
          
          .message-subject, .message-content {
            margin-bottom: 25px;
          }
          
          .message-subject h4, .message-content h4 {
            font-size: 14px;
            color: #666;
            margin-bottom: 10px;
            font-weight: 500;
          }
          
          .subject-value {
            font-size: 18px;
            font-weight: 600;
            background: #f0f3ff;
            padding: 15px 20px;
            border-radius: 10px;
            color: #333;
          }
          
          .message-value {
            border: 1px solid #f0f0f0;
            border-radius: 10px;
            padding: 20px;
            background: white;
            min-height: 150px;
            line-height: 1.6;
            font-size: 15px;
            color: #444;
          }
          
          .modal-footer {
            padding: 20px;
            border-top: 1px solid #f0f0f0;
            display: flex;
            justify-content: flex-end;
            gap: 10px;
          }
          
          .btn {
            padding: 10px 20px;
            border-radius: 25px;
            font-weight: 500;
            transition: all 0.2s;
          }
          
          .btn-outline-secondary {
            border: 1px solid #e0e0e0;
            background: white;
            color: #666;
          }
          
          .btn-outline-secondary:hover {
            background: #f8f9fa;
          }
          
          .btn-danger {
            background: #ff4d4d;
            color: white;
            border: none;
          }
          
          .btn-danger:hover {
            background: #ff3333;
            transform: translateY(-2px);
            box-shadow: 0 4px 10px rgba(255, 77, 77, 0.3);
          }
          
          .btn-primary {
            background: #6b73ff;
            color: white;
            border: none;
          }
          
          .btn-primary:hover {
            background: #5a64ff;
            transform: translateY(-2px);
            box-shadow: 0 4px 10px rgba(107, 115, 255, 0.3);
          }
          
          /* Pagination */
          .pagination-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 30px;
            padding: 0 10px;
          }
          
          .pagination {
            display: flex;
            gap: 5px;
          }
          
          .page-link {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid #e0e0e0;
            color: #666;
            font-weight: 500;
            transition: all 0.2s;
            padding: 0;
          }
          
          .page-link:hover {
            background: #f8f9fa;
          }
          
          .page-item.active .page-link {
            background: linear-gradient(135deg, #6b73ff 0%, #000dff 100%);
            border-color: transparent;
            color: white;
          }
          
          .pagination-info {
            color: #666;
            font-size: 14px;
          }
          
          /* Empty State */
          .empty-state-icon {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            background: #f0f3ff;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 20px;
            font-size: 30px;
            color: #6b73ff;
          }
        `}
      </style>
    </div>
  );
};

export default ContactManagementPage; 