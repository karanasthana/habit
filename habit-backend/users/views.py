import re

from django.contrib.auth import authenticate, login
from rest_framework import permissions, generics, status
from rest_framework.response import Response
from rest_framework_jwt.settings import api_settings
from .userhelper import ValidateEmail

from users.models import User
from users.serializers import UserSerializer , LoginSerializer

jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER


class SignUpUserView(generics.GenericAPIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, *args, **kwargs):

        email = request.data.get('email')
        if email is None:
            return Response({'email': ['This field is required.']},
                            status=status.HTTP_400_BAD_REQUEST)

        email = email.lower()
        email_valid_status = ValidateEmail(email)
        if not email_valid_status:
            return Response({'email': ['This field is invalid.']},
                            status=status.HTTP_400_BAD_REQUEST)

        password = request.data.get('password')
        
        if password is None:
            return Response({'password': ['This field is required.']},
                            status=status.HTTP_400_BAD_REQUEST)


        first_name = request.data.get('first_name')
        last_name = request.data.get('last_name')

        if first_name is None:
            return Response({'first_name': ['This field is required.']},
                            status=status.HTTP_400_BAD_REQUEST)

        if last_name is None:
            return Response({'last_name': ['This field is required.']},
                            status=status.HTTP_400_BAD_REQUEST)

        gender = request.data.get('gender')
        if gender is None:
            return Response({'gender': ['This field is required.']},
                            status=status.HTTP_400_BAD_REQUEST)

        if gender != 'male' and gender != 'female' and gender != 'other':
            return Response({'gender': ['This field is invalid.']},
                            status=status.HTTP_400_BAD_REQUEST)

        try:
            existing_user = User.objects.get(email=email)
            return Response({'error': ['Action not allowed.']},
                            status=status.HTTP_403_FORBIDDEN)
        except User.DoesNotExist:
            pass

        data = {'email': email, 'password': password, 'first_name': first_name, 'last_name': last_name,
                'gender': gender}
        
        serializer = UserSerializer(data=data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        user = User.objects.get(email=email)

        user = authenticate(request, email=email, password=password)
        
        if user is not None:

            data = {"token": jwt_encode_handler(jwt_payload_handler(user)),
                    "user_id": user.id}
            
            login(request, user)
            serializer = LoginSerializer(data=data)
            serializer.is_valid()
            return Response(serializer.data,
                            status=status.HTTP_200_OK)
        else:
            return Response({'error': ['Invalid Credentials.']},
                            status=status.HTTP_401_UNAUTHORIZED)

class LoginView(generics.GenericAPIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, *args, **kwargs):

        email = request.data.get('email')
        password = request.data.get('password')
        
        if email is None:
            return Response({'email': ['This field is required.']},
                            status=status.HTTP_400_BAD_REQUEST)

        if password is None:
            return Response({'password': ['This field is required.']},
                            status=status.HTTP_400_BAD_REQUEST)

        # Authenticate User
        try:
            user = User.objects.get(email=email)
        except:
            # user does not exist
            return Response({'error': ['This user does not exist.']},
                                status=status.HTTP_403_FORBIDDEN)

        user = authenticate(request, email=email, password=password)
        
        if user is not None:
            data = {"token": jwt_encode_handler(jwt_payload_handler(user)),
                    "user_id": user.id}
            login(request, user)
            serializer = LoginSerializer(data=data)
            serializer.is_valid()
            return Response(serializer.data,
                            status=status.HTTP_200_OK)
        else:
            return Response({'error': ['Invalid Credentials.']},
                            status=status.HTTP_403_FORBIDDEN)

