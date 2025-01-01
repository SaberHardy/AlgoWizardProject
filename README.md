# Data Analysis Web Application

A Django-based web application for data analysis and machine learning algorithm suggestions. This application allows users to upload CSV/Excel files, visualize data, get statistical insights, and receive ML algorithm recommendations.

## Features

### File Upload
- Support for CSV and Excel file formats
- Real-time upload progress tracking
- File validation and error handling
- Secure file storage system

### Data Visualization
- Interactive data tables with sorting and filtering
- Pagination for large datasets
- Basic data cleaning options
- Column type detection and analysis

### Statistical Analysis
- Descriptive statistics (mean, median, mode, standard deviation)
- Data distribution visualization
- Correlation analysis
- Missing value detection
- Outlier identification

### Algorithm Suggestions
- Automatic problem type detection (classification/regression)
- Feature analysis and importance
- Algorithm recommendations based on data characteristics
- Comparative analysis of suggested algorithms
- Performance metrics explanation

## Technology Stack

### Backend
- Python 3.8+
- Django 4.2+
- Pandas
- NumPy
- Scikit-learn
- OpenPyXL

### Frontend
- HTML5
- CSS3
- JavaScript
- Bootstrap 5
- DataTables.js
- Chart.js

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/data-analysis-webapp.git
cd data-analysis-webapp
```

2. Create and activate a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install required packages:
```bash
pip install -r requirements.txt
```

4. Set up the database:
```bash
python manage.py migrate
```

5. Create a superuser (admin):
```bash
python manage.py createsuperuser
```

6. Run the development server:
```bash
python manage.py runserver
```

## Project Structure
```
data-analysis-webapp/
├── manage.py
├── requirements.txt
├── README.md
├── static/
├── templates/
├── data_analysis_project/
│   ├── __init__.py
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
├── file_upload/
│   ├── __init__.py
│   ├── models.py
│   ├── views.py
│   └── urls.py
├── data_analysis/
│   ├── __init__.py
│   ├── models.py
│   ├── views.py
│   └── urls.py
└── algorithm_suggestion/
    ├── __init__.py
    ├── models.py
    ├── views.py
    └── urls.py
```

## Configuration

1. Environment Variables:
Create a `.env` file in the root directory and add:
```
SECRET_KEY=your_secret_key
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1
```

2. File Upload Settings:
```python
# settings.py
MAX_UPLOAD_SIZE = 5242880  # 5MB
ALLOWED_FILE_TYPES = ['csv', 'xlsx', 'xls']
```

## Usage

1. Access the application at `http://localhost:8000`
2. Upload a CSV or Excel file using the upload form
3. View the data preview and basic statistics
4. Navigate to detailed analysis section for more insi