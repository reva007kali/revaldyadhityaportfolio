<x-mail::message>
# New Message Received!

**Name:** {{ $contactMessage->name }}  
**Email:** {{ $contactMessage->email }}  
**Subject:** {{ $contactMessage->subject }}

**Message:**  
{{ $contactMessage->message }}

<x-mail::button :url="route('admin.messages')">
View in Admin Panel
</x-mail::button>

Thanks,<br>
{{ config('app.name') }}
</x-mail::message>
