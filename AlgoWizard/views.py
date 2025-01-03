from django.shortcuts import render

def index(request):
    return render(request, 'AlgoWizard/index.html', context={})

def upload(request):
    return render(request, 'AlgoWizard/upload.html', context={})