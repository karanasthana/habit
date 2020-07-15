FROM python:3
ENV PYTHONUNBUFFERED 1
RUN mkdir /habit-backend
WORKDIR /habit-backend
COPY requirements.txt /habit-backend/
RUN pip install -r requirements.txt
COPY . /habit-backend
