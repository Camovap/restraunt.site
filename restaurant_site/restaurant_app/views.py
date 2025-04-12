from django.shortcuts import render, redirect
from django.http import JsonResponse
from django.utils import timezone
from django.contrib.auth import authenticate, login
from .models import Phone_Number


def index(request):
    return render(request, 'index.html')

def auth(request):
    if request.method == 'POST':
        username = request.POST.get('login')
        password = request.POST.get('password')
        print(f'login: {username}, password: {password}')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            print('test1')
            login(request, user)
            return render(request, 'index.html')
        else:
            print('test2')
            return JsonResponse({'status': 'error', 'message': 'Неверный логин и пароль'})
    return render(request, 'auth.html')

def reg(request):

    if request.method == 'POST':
        login = login.POST.get('login')
        password = request.POST.get('password')
        first_name = request.POST.get('first_name')
        last_name = request.POST.get('last_name')
        email = request.POST.get('email')

        #Создаем пользователя

        print(username,password,first_name,last_name,email)
    return render(request, 'reg.html')