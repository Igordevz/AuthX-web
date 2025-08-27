"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Copy, Eye, EyeOff, Key, Shield, User, RefreshCw } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function Settings() {
  const [showPrivateKey, setShowPrivateKey] = useState(false)
  const [showPublicKey, setShowPublicKey] = useState(false)
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const { toast } = useToast()

  const privateKey = "PRIVATE_KEY_PLACEHOLDER"
  const publicKey = "PRIVATE_KEY_PLACEHOLDER"

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text)
    toast({
      title: "Copied!",
      description: `${type} copied to clipboard`,
    })
  }

  const regenerateKeys = () => {
    toast({
      title: "Keys Regenerated",
      description: "Your API keys have been regenerated successfully",
    })
  }

  const changePassword = () => {
    if (newPassword !== confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match",
        variant: "destructive",
      })
      return
    }

    toast({
      title: "Password Changed",
      description: "Your password has been updated successfully",
    })

    setCurrentPassword("")
    setNewPassword("")
    setConfirmPassword("")
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground">Manage your account settings and 
           keys</p>
      </div>

      {/* API Keys */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Key className="h-5 w-5" />
              Private Key
            </CardTitle>
            <CardDescription>Keep this secret! Use for server-side operations</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Private Key</Label>
              <div className="flex gap-2">
                <Input
                  type={showPrivateKey ? "text" : "password"}
                  value={privateKey}
                  readOnly
                  className="font-mono text-sm"
                />
                <Button variant="outline" size="icon" onClick={() => setShowPrivateKey(!showPrivateKey)}>
                  {showPrivateKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
                <Button variant="outline" size="icon" onClick={() => copyToClipboard(privateKey, "Private key")}>
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <Badge variant="destructive" className="w-fit">
              <Shield className="h-3 w-3 mr-1" />
              Keep Secret
            </Badge>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Key className="h-5 w-5" />
              Public Key
            </CardTitle>
            <CardDescription>Safe to use in client-side applications</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Public Key</Label>
              <div className="flex gap-2">
                <Input
                  type={showPublicKey ? "text" : "password"}
                  value={publicKey}
                  readOnly
                  className="font-mono text-sm"
                />
                <Button variant="outline" size="icon" onClick={() => setShowPublicKey(!showPublicKey)}>
                  {showPublicKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
                <Button variant="outline" size="icon" onClick={() => copyToClipboard(publicKey, "Public key")}>
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <Badge variant="secondary" className="w-fit">
              Client-Safe
            </Badge>
          </CardContent>
        </Card>
      </div>

      {/* Regenerate Keys */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <RefreshCw className="h-5 w-5" />
            Regenerate API Keys
          </CardTitle>
          <CardDescription>Generate new API keys. This will invalidate your current keys.</CardDescription>
        </CardHeader>
        <CardContent>
          <Button variant="destructive" onClick={regenerateKeys}>
            <RefreshCw className="h-4 w-4 mr-2" />
            Regenerate Keys
          </Button>
        </CardContent>
      </Card>

      {/* Change Password */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            Change Password
          </CardTitle>
          <CardDescription>Update your account password</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="current-password">Current Password</Label>
            <Input
              id="current-password"
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              placeholder="Enter current password"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="new-password">New Password</Label>
            <Input
              id="new-password"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter new password"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm-password">Confirm New Password</Label>
            <Input
              id="confirm-password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm new password"
            />
          </div>
          <Button
            onClick={changePassword}
            className="bg-color hover:bg-color/90 text-white"
            disabled={!currentPassword || !newPassword || !confirmPassword}
          >
            Change Password
          </Button>
        </CardContent>
      </Card>

      {/* Account Information */}
      <Card>
        <CardHeader>
          <CardTitle>Account Information</CardTitle>
          <CardDescription>Your account details and preferences</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="full-name">Full Name</Label>
              <Input id="full-name" defaultValue="John Doe" placeholder="Enter your full name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" defaultValue="john@example.com" placeholder="Enter your email" />
            </div>
          </div>
          <Button variant="outline">Update Account</Button>
        </CardContent>
      </Card>
    </div>
  )
}
