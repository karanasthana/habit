import re
    
def ValidateEmail(email):
    """
    This method is used for validating email.
    Parameters: email
    Returns: Status
    """

    # Regular expression for email validity
    regex = '^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$'
    # Validate input email against regex
    if re.search(regex, email):
        return 'Valid'
    return 'Invalid'