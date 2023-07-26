from rest_framework import serializers

from .models import Task


class TaskSerializer(serializers.ModelSerializer):
    # id = serializers.CharField(source='_id', read_only=True)
    id = serializers.SerializerMethodField()

    def get_id(self, obj):
        return str(obj.id)

    class Meta:
        model = Task
        fields = ('id', 'title', 'description', 'created_at', 'updated_at')
